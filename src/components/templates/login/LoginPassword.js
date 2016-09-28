import React, { Component } from 'react';

import userImage from '../../../images/dog.svg';
import LoginLogo from '../../atoms/loginAtoms/Logo'
import Button from '../../atoms/Button'
import InputPassword from '../../atoms/loginAtoms/InputPassword'
import HelpText from  '../../atoms/loginAtoms/HelpText'

import { loginPassword } from '../../../actions/index.js';
import { connect } from 'react-redux';

class LoginPassword extends Component {
  handlePasswordChange(e) {
    console.log("handling password");
  }

  constructor(props) {
    super(props);
    this.state = {password: ""};
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    let state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onClick() {
    console.log( this.state.password);
    this.props.loginPassword(this.props.username, this.state.password);
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
                        <input type="text"
                        className="login-input"
                        onChange={this.onChange}
                        name="password"
                        placeholder="CONTRASEÑA"
                        />
                      </div>
                    </div>
                      <button type="button" className="login-button" onClick={this.onClick}>{this.context.intl.formatMessage({id:"NEXT"})}</button>
                  </form>
                </div>

                <div className="l-center visible-xs">
                  <img src={userImage} alt="" className="login-image-xs"/>
                  <form>
                    <div className="form-group login-border clearfix">
                      <i className="fa fa-lock l-left fa-2x" aria-hidden="true"></i>
                      <div className="l-left">
                        <input type="text"
                        className="login-input"
                        onChange={this.onChange}
                        name="password"
                        placeholder="CONTRASEÑA"
                        />
                      </div>
                    </div>
                      <button type="button" className="login-button" onClick={this.onClick}>{this.context.intl.formatMessage({id:"NEXT"})}</button>
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

LoginPassword.contextTypes ={
 intl:React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    username: "Eugenia2",
  };
}

function mapDispatchToProps(dispatch) {
  return {
   loginPassword: (username,password) => {
     dispatch(loginPassword(username,password));
   }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPassword)

