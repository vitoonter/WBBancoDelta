import React from 'react';

const UserImage = ({image}) => {
  return (
  <a className="user-image l-right hidden-xs">
    <img src={image} alt="user"></img>
  </a>
)
}

export default UserImage;
