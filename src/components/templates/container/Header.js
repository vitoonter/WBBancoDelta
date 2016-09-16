import React from 'react';
import UserImage from '../../atoms/userAtoms/UserImage'
import UserFullName from '../../atoms/userAtoms/UserFullName'
import LastConnection from '../../atoms/userAtoms/LastConnection'
import HeaderLogoImage from '../../atoms/HeaderLogoImage'
import Menu from '../../organisms/Menu'

const HeaderUserInformation = () => (
  <div className="l-right">
    <UserFullName text="Eugenia Rodriguez" />
    <LastConnection /> 
  </div>
)

const Header = () => (
  <nav className="nav-bar navbar-default clearfix">
    <div className="container header-space">
      <Menu />
      <HeaderLogoImage />
      <UserImage />
      <HeaderUserInformation />
    </div>
  </nav>
)

export default Header;
