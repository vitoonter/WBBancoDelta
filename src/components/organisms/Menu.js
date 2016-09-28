import React from 'react';

const Menu = ({isVisibleMenu, options}) =>
  <ul className={(isVisibleMenu) ? 'nav is-visible' : 'nav is-not-visible' }>
    {Object.keys(options).map(function (name) {
      var items = options[name];
      return (
        <div key={name}>
          <li className="nav-section">
            <div className="nav-section--header">
              {name}
            </div>
            <ul className="nav-section--links" >
              {items.map(function(item, index){
                return (
                  <li key={index}><i className="fa fa-square l-left"></i><span>{item}</span></li>
                )
              })}
            </ul>
          </li>
          <hr/>
        </div>
      );
    })}
  </ul>

export default Menu;
