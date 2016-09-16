import React from 'react';
import userImage from '../../images/userImage.png';

const UserImage = () => (
  <a href="#" className="user-image l-right hidden-xs">
    <img src={userImage} alt="user"></img>
  </a>
)

export default UserImage;