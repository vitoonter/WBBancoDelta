import React from 'react'
import LoginLogo from '../../atoms/loginAtoms/Logo'
import HelpText from  '../../atoms/loginAtoms/HelpText'
import { login } from '../../../actions/index.js';
import { connect } from 'react-redux';

class LoginUser extends React.Component{

  constructor(props) {
    super(props);
    this.state = {username: ""};
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    let state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onClick() {
    this.props.login(this.state.username);
  }

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
                      <input type="text"
                        className="login-input"
                        onChange={this.onChange}
                        name="username"
                        placeholder={this.context.intl.formatMessage({id:"USER_NAME"})}
                      />
                    </div>
                  </div>
                  <button type="button" className="login-button" onClick={this.onClick}>{this.context.intl.formatMessage({id:"NEXT"})}</button>
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

const mapStateToProps = state => {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
   login: (username) => {
     dispatch(login(username));
   }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginUser)
