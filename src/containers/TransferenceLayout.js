import React, { Component }  from 'react';
import Footer from '../components/templates/container/Footer';
import Header from '../components/templates/container/Header';
import Menu from '../components/organisms/Menu';
import showMenu from '../actions/index.js';
import fetchUserNames from '../actions/sessionAction'
import { connect } from 'react-redux';

class TransferenceLayout extends Component {

  componentWillMount() {
    this.props.fetchUserNames('Eugenia4');
  }

  render() {
    const { children, isVisibleMenu, showMenu, firstname, lastname, userImage, lastConnection, options } = this.props;

    return  (
      <div>
        <Header onMenuClicked={showMenu} username={`${firstname} ${lastname}`} lastConnection={lastConnection} userImage={userImage}/>
        <div className="external-wrapper">
        {/* real usage <Menu isVisibleMenu={isVisibleMenu} options={options}/> */}

        {/* delete this */}
          <Menu
            isVisibleMenu={isVisibleMenu}
            options={{
                     "consultas": [
                       "posicion",
                       "estado de cuenta"
                     ],
                     "transferencias": [
                       "Entre Cuentas",
                       "A terceros"
                     ]
                    }}/>
          { children }
          <Footer/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isVisibleMenu: state.menuReducer.isVisibleMenu,
    firstname: state.entities.firstname,
    lastname: state.entities.lastname,
    lastConnection: state.entities.lastConnection,
    userImage: state.sessionReducer.imgURL,
    options: state.sessionReducer.options
  };
}

function mapDispatchToProps(dispatch) {
  return {
   showMenu: () => {dispatch(showMenu());},
   fetchUserNames: (username) => {dispatch(fetchUserNames(username));}
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransferenceLayout)
