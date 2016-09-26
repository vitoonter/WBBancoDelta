import React from 'react'
import LoginLogo from '../../atoms/loginAtoms/Logo'
import HelpText from  '../../atoms/loginAtoms/HelpText'
import InputUser from '../../atoms/loginAtoms/InputUser'
import Button from '../../atoms/Button'
import { defineMessages, injectIntl, intlShape, FormattedMessage } from 'react-intl';

class LoginUser extends React.Component  {

  render() {
    return (
      <div>
        <div className="l-vertical-horizontal-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <LoginLogo />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form className="login-username l-center">
                  <div className="form-group login-border clearfix">
                    <i className="fa fa-user fa-2x l-left" >
                    </i>
                    <div className="l-left">
                      <InputUser className="login-input" placeholder={this.context.intl.formatMessage({id:"USER_NAME"})}/>
                    </div>
                  </div>
                  <Button link="/login-password" className="login-button" text={this.context.intl.formatMessage({id:"NEXT"})}/>
                </form>
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
    );
  }
}

LoginUser.contextTypes ={
 intl:React.PropTypes.object.isRequired
}

export default LoginUser;
