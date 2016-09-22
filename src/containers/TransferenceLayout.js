import React from 'react';
import Footer from '../components/templates/container/Footer';
import Header from '../components/templates/container/Header';
import { connect } from 'react-redux';

const TransferenceLayout = ({ children , username, userImage}) =>
  <div>
    <Header username={username} userImage={userImage}/>
    <div className="external-wrapper">
      <ul className='nav'>
        <li className="nav-section">
          <div className="nav-section--header">
            CONSULTAS
          </div>
          <ul className="nav-section--links" >
            <li><i className="fa fa-square l-left"></i><span>Posición</span></li>
            <li><i className="fa fa-square l-left"></i><span>Estado de Cuenta</span></li>
          </ul>
        </li>
        <hr/>
        <li className="nav-section">
          <div className="nav-section--header">
            TRANSFERENCIAS
          </div>
          <ul className="nav-section--links">
            <li><i className="fa fa-square l-left"></i><span>Entre cuentas</span></li>
            <li><i className="fa fa-square l-left"></i><span>A terceros</span></li>
          </ul>
          <hr/>
        </li>
      </ul>
      { children }
      <Footer/>
    </div>
  </div>

const mapStateToProps = state => {
  return {
    username: state.sessionReducer.username,
    userImage: state.sessionReducer.imgURL
  };
}

export default connect(
  mapStateToProps,
)(TransferenceLayout)
