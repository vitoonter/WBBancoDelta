import React, { Component } from 'react';

import userImage from '../../../images/dog.svg';
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
        <div className="l-vertical-horizontal-center">
          <div className="container" >
            <div className="row">
              <div className="col-md-12">
                <LoginLogo />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="login-password l-center">
                  <img src={userImage} className="l-left" alt=""/>
                  <form className="l-right">
                    <div className="form-group login-border clearfix">
                      <i className="fa fa-lock l-left fa-2x" aria-hidden="true"></i>
                      <InputPassword placeholder="CONTRASEÑA"/>
                    </div>
                    <Button link="transference1" className="login-button" text="SIGUIENTE" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

