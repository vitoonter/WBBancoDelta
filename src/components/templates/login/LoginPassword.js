import React, { Component } from 'react';

import userImage from '../../../images/dog.svg';
import LoginLogo from '../../atoms/loginAtoms/Logo'
import Button from '../../atoms/Button'
import InputPassword from '../../atoms/loginAtoms/InputPassword'
import HelpText from  '../../atoms/loginAtoms/HelpText'

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
                <div className="login-password l-center hidden-xs">
                  <img src={userImage} className="l-left" alt=""/>
                  <form className="l-right">
                    <div className="form-group login-border clearfix">
                      <i className="fa fa-lock l-left fa-2x" aria-hidden="true"></i>
                      <div className="l-right">
                        <InputPassword placeholder="CONTRASEÑA"/>
                      </div>
                    </div>
                    <Button link="transference1" className="login-button" text="SIGUIENTE" />
                  </form>
                </div>

                <div className="l-center visible-xs">
                  <img src={userImage} alt="" className="login-image-xs"/>
                  <form>
                    <div className="form-group login-border clearfix">
                      <i className="fa fa-lock l-left fa-2x" aria-hidden="true"></i>
                      <div className="l-left">
                        <InputPassword placeholder="CONTRASEÑA"/>
                      </div>
                    </div>
                    <Button link="transference1" className="login-button" text="SIGUIENTE" />
                  </form>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-12 center-block box--footer-message">
                <HelpText text="Le invitamos a ingresar a nuestra página web para mantenerse actualizado en todo lo referente a las medidas de seguridad básicas, que debe tomaren cuenta para mantener su "
                  aditional_text="información segura"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

