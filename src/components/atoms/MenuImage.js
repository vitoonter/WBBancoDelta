import React from 'react';
import menuImage from '../../images/menuImage.png';

const MenuImage = ({onMenuClicked}) => (
  <img src={menuImage} className="menu-image" alt="menu" onClick={onMenuClicked}></img>
)

export default MenuImage;