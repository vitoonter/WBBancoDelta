import React, { Component } from 'react';
import MenuImage from '../atoms/MenuImage'

//Get from API
const ContentMenuComponent = () => (
  <ul className='nav'>
    <li className="nav-section">
      <div className="nav-section--header">
        CONSULTAS
      </div>
      <hr/>
      <ul className="">
        <li>Posición</li>
        <li>Estado de Cuenta</li>
      </ul>
    </li>
    <hr/>
    <li className="nav-section">
      <div className="nav-section--header">
        TRANSFERENCIAS
      </div>
      <hr/>
      <ul className="nav-section--links">
        <li>Entre cuentas</li>
      </ul>
      <ul className="nav-section--links">
        <li>A terceros</li>
      </ul>
    </li>
    <hr/>
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
        <a href="#" className="menu-image" onClick={() => this.handleMenuClick()}>
          <MenuImage />
        </a>
        {this.renderMenuBar()}
      </span>
    )
  }
}

export default Menu;
