import React from 'react';
import { Route , IndexRoute } from 'react-router';

import LoginUser from './components/templates/login/LoginUser';
import Transference1 from './components/templates/transferences/Transference1.js';

//components
import App from './App';

export const getRoutes = () =>
  <Route path="/" component={App}>
    <IndexRoute component={LoginUser}/>
    <Route path="transference1" component={Transference1}/>
  </Route>
