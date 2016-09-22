import React from 'react';
import Footer from '../components/templates/container/Footer';
import Header from '../components/templates/container/Header';
import Menu from '../components/organisms/Menu';
import showMenu from '../actions/index.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

const TransferenceLayout = ({ children, isVisibleMenu, showMenu }) => (
  <div>
    <Header onMenuClicked={showMenu} />
    <div className="external-wrapper">
      <Menu isVisibleMenu={isVisibleMenu}/>
      { children }
      <Footer/>
    </div>
  </div>
)

const mapStateToProps = state => {
  return {isVisibleMenu: state.menuReducer.isVisibleMenu};
}

function mapDispatchToProps(dispatch) {
  return {
   showMenu: () => {
     dispatch(showMenu());
   }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransferenceLayout)
