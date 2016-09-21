import React from 'react';
import UserImage from '../../atoms/userAtoms/UserImage'
import UserFullName from '../../atoms/userAtoms/UserFullName'
import LastConnection from '../../atoms/userAtoms/LastConnection'
import HeaderLogoImage from '../../atoms/HeaderLogoImage'
import Menu from '../../organisms/Menu'
import MenuImage from '../../atoms/MenuImage'

const HeaderUserInformation = () => (
  <div className="l-right">
    <UserFullName text="Eugenia Rodriguez" />
    <LastConnection /> 
  </div>
)

const Header = ({onMenuClicked}) => (
  <nav className="nav-bar navbar-default clearfix">
    <div className="container header-space">
      <MenuImage onMenuClicked={onMenuClicked}/>
      <HeaderLogoImage />
      <UserImage />
      <HeaderUserInformation />
    </div>
  </nav>
)

export default Header;
