import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const log = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}

let createStoreWithMiddleware = applyMiddleware(thunk, log)(createStore);

let store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);


const Index = () => 
	<Provider store={ store } >
	    <App>
	    </App>
	</Provider>

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
