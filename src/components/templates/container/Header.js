import React from 'react';
import UserImage from '../../atoms/userAtoms/UserImage'
import UserFullName from '../../atoms/userAtoms/UserFullName'
import LastConnection from '../../atoms/userAtoms/LastConnection'
import HeaderLogoImage from '../../atoms/HeaderLogoImage'
import Menu from '../../organisms/Menu'
import MenuImage from '../../atoms/MenuImage'

const HeaderUserInformation = ({username}) => (
  <div className="l-right">
    <UserFullName text={username} />
    <LastConnection />
  </div>
)

const Header = ({onMenuClicked, username, userImage}) => 
  <nav className="nav-bar navbar-default clearfix">
    <div className="container header-space">
      <MenuImage onMenuClicked={onMenuClicked}/>
      <HeaderLogoImage />
      <UserImage image={userImage}/>
      <HeaderUserInformation username={username}/>
    </div>
  </nav>

export default Header;
