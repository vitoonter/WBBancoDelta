import React from 'react';
import ReactDOM from 'react-dom';

//router
import { Router, hashHistory } from 'react-router';
import { getRoutes } from './routes';

//redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';

const log = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const createStoreWithMiddleware = applyMiddleware(log)(createStore);

const store = createStoreWithMiddleware(reducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

const history = syncHistoryWithStore(hashHistory, store);

const Index = () => 
  <Provider store={store}>
    <div>
      <Router history={history}>
        { getRoutes() }
      </Router>
    </div>
  </Provider>

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
