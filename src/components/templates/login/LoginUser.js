import React, { Component } from 'react';
import Footer from '../container/Footer'
import { Router, Route, Link, browserHistory } from 'react-router'

import LoginLogo from '../../atoms/loginAtoms/Logo'
import HelpText from  '../../atoms/loginAtoms/HelpText'

import InputUser from '../../atoms/loginAtoms/InputUser'

import Button from '../../atoms/Button'

class LoginUser extends Component{
  render(){
    return (
      <div>
        <div className="vertical-horizontal-center">
          <div className="container">
            <div className="row">
              <LoginLogo />
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="login-username center">
                  <form>
                    <div className="form-group login-border clearfix">
                      <i className="fa fa-user l-left fa-2x" aria-hidden="true">
                      </i>   
                      <InputUser placeholder="NOMBRE DE USUARIO"/>
                    </div>
                    <Button link="/login" className="button-bank" text="SIGUIENTE"/>
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
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default LoginUser;
