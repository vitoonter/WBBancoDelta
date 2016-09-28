import { Schema, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

const API_ROOT = 'http://10.18.1.96:4000/'

// Realiza la invocación a la API y normaliza el resultado JSON a partir de un schema 
// Esto hace que todos los llamados a la API tengan la misma forma
function callApi(endpoint, schema, method, body) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  // Esta hecho solo para el GET, luego para el post habria que recibir los parametros y agregarlos al fetch
  // Otras cosas a agregar son por ej el token de session

  return fetch(fullUrl,
    {
      method: method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }
  ).then(response =>
      response.json().then(json => ({ json, response }))
  ).then(({ json, response }) => {
    if (response.status >= 400) {
      return Promise.reject(json)
    }

    // En el front, vamos a usar camelCase para todos los datos, 
    // con esto nos aseguramos de que si el server manda otro formato no tenemos problema
    const camelizedJson = camelizeKeys(json)
    return Object.assign({},
      normalize(camelizedJson, schema) // pasa el resultado al schema
    )
  })
}

// Schemas creados, esto habria que seperarlo en archivos cuando se tengan muchos
const userSchema = new Schema('user', {
  idAttribute: user => user
})

// Expone los Schemas para importarlo desde otros archivos, por ej los actions
export const Schemas = {
  USER: userSchema
}

// Cuando el middleware recibe este tipo de symbol en el action, 
// tomara el pedido y se ejecutara, sino seguira ejecutando sin hacer nada
export const CALL_API = Symbol('Call API')


export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') { // si no es un CALL_API sigue
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types, method, body } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }
  // valida parametros
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  // siguiente action luego de ejecutar el fetch
  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next({ type: 'FETCH_REQUEST', endpoint: endpoint })
  next(actionWith({ type: requestType }))

  return callApi(endpoint, schema, method, body).then(
    response => {
      next({ type: 'FETCH_RESPONSE', endpoint: endpoint })
      next(actionWith({response, type: successType }))
    },
    error => {
      next(actionWith({ type: 'FETCH_FALIURE', endpoint: endpoint, error: error.message || 'Error al llamar al API' }))
      next(actionWith({ type: failureType, error: error.message || 'Error al llamar al API' }))
    }
  )
}
