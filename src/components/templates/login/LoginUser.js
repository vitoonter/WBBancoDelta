import React, { Component } from 'react';
import Footer from '../container/Footer'
import LoginLogo from '../../atoms/loginAtoms/Logo'
import HelpText from  '../../atoms/loginAtoms/HelpText'
import InputUser from '../../atoms/loginAtoms/InputUser'
import Button from '../../atoms/Button'

class LoginUser extends Component{
  render(){
    return (
      <div>
        <div className="l-vertical-horizontal-center">
          <div className="container">
            <div className="row">
              <LoginLogo />
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="login-username l-center">
                  <form>
                    <div className="form-group login-border clearfix">
                      <i className="fa fa-user l-left fa-2x" >
                      </i>   
                      <InputUser className="login-input" placeholder="NOMBRE DE USUARIO"/>
                    </div>
                    <Button link="/login" className="login-button" text="SIGUIENTE"/>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <HelpText text="Le invitamos a ingresar a nuestra página web para mantenerse actualizado en todo lo referente a las medidas de seguridad básicas, que debe tomaren cuenta para mantener su "
                  aditional_text="información segura"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginUser;
