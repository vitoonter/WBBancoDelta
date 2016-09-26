import React from 'react';
import '../styles/base.css';
import '../styles/layout.css'
import '../styles/modules.css';
import '../styles/state.css';
import changeLanguage from '../actions/language.js';
import Languages from '../components/organisms/Languages'
import { connect } from 'react-redux';

const App = ({ children, changeLanguage }) =>
  <div>
    <Languages changeLanguage={changeLanguage}/>
    { children }
  </div>


const mapStateToProps = state => {
  return {
    language: state.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: (language) => { 
      dispatch(changeLanguage(language));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
