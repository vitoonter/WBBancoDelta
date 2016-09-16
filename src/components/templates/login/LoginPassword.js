import React, { Component } from 'react';

import userImage from '../../../images/dog.svg';
import Footer from '../container/Footer'
import LoginLogo from '../../atoms/loginAtoms/Logo'
import Button from '../../atoms/Button'
import InputPassword from '../../atoms/loginAtoms/InputPassword'

export default class LoginPassword extends Component {
  handlePasswordChange(e) {
    console.log("handling password");
  }
  render() {
    return (
      <div>
        <div className="vertical-horizontal-center">
          <div className="container" >
            <div className="row">
              <LoginLogo />
            </div>
            <div className="row">
              <div className="login-password center">
                <img src={userImage} className="l-left" alt=""/>
                <form className="l-right">
                  <div className="form-group login-border clearfix">
                    <i className="fa fa-lock l-left fa-2x" aria-hidden="true"></i>               
                    <InputPassword placeholder="CONTRASEÑA"/>
                  </div>
                  <Button link="transf1" className="button-bank" text="SIGUIENTE" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

