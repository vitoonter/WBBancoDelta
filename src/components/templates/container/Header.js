import React from 'react';
import UserImage from '../../atoms/userAtoms/UserImage'
import UserFullName from '../../atoms/userAtoms/UserFullName'
import LastConnection from '../../atoms/userAtoms/LastConnection'
import HeaderLogoImage from '../../atoms/HeaderLogoImage'
import Menu from '../../organisms/Menu'
import MenuImage from '../../atoms/MenuImage'

const HeaderUserInformation = ({username, lastConnection}) => (
  <div className="l-right">
    <UserFullName text={username} />
    <LastConnection text={lastConnection}/>
  </div>
)

const Header = ({onMenuClicked, username, userImage, lastConnection}) =>
  <nav className="nav-bar navbar-default clearfix">
    <div className="container header-space">
      <MenuImage onMenuClicked={onMenuClicked}/>
      <HeaderLogoImage />
      <UserImage image={userImage}/>
      <HeaderUserInformation username={username} lastConnection={lastConnection}/>
    </div>
  </nav>

export default Header;
