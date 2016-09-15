import React from 'react';
import { Route , IndexRoute } from 'react-router';

//components
import App from './App';
import Test1 from './components/test1';
import Test2 from './components/test2';

export const getRoutes = () => 
  <Route path="/" component={App}>
    <IndexRoute component={Test1}/>
    <Route path="test2" component={Test2}/>
  </Route>