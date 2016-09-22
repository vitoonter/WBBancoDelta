import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import LoginLayout from './containers/LoginLayout';
import TransferenceLayout from './containers/TransferenceLayout';
import LoginUser from './components/templates/login/LoginUser';
import LoginPassword from './components/templates/login/LoginPassword';
import Transference1 from './components/templates/transferences/Transference1.js';
import Transference2 from './components/templates/transferences/Transference2.js';
import Transference3 from './components/templates/transferences/Transference3.js';
import Test1 from './components/test1';

export default (
  <Route path="/" component={App}>
    <Route component={LoginLayout}>
      <IndexRoute component={LoginUser}/>
      <Route path="login-password" component={LoginPassword}/>
      <Route path="test1" component={Test1}/>
    </Route>
    <Route component={TransferenceLayout}>
      <Route path="transference1" component={Transference1}/>
      <Route path="transference2" component={Transference2}/>
      <Route path="transference3" component={Transference3}/>
    </Route>
  </Route>
)
