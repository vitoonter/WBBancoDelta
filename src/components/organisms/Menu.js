import React from 'react';

const Menu = ({isVisibleMenu}) => 
  <ul className={(isVisibleMenu) ? 'nav is-visible' : 'nav is-not-visible' }>
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

export default Menu;
