import React from 'react';
import UserImage from '../../atoms/UserImage'
import UserFullName from '../../atoms/UserFullName'
import LastConnection from '../../atoms/LastConnection'
import HeaderLogoImage from '../../atoms/HeaderLogoImage'
import Menu from './Menu'

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
