import React, { Component } from 'react';
import MenuImage from '../atoms/MenuImage'

//Get from API
const ContentMenuComponent = () => (
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
)

class Menu extends Component{
  constructor(props) {
    super(props);
    this.state = {
      NavVisible: false
    };
  }

  renderMenuBar() {
    if(this.state.NavVisible) {
      return  <ContentMenuComponent />;
    }
  }

  handleMenuClick() {
    if(!this.state.NavVisible) {
      this.setState({NavVisible: true});
    } else {
      this.setState({NavVisible: false});
    }
  }

  render(){
    return (
      <span>
        <a className="menu-image" onClick={() => this.handleMenuClick()}>
          <MenuImage />
        </a>
        {this.renderMenuBar()}
      </span>
    )
  }
}

export default Menu;
