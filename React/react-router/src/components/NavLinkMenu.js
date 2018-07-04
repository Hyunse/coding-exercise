import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkMenu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '20px'
  };
  
  return (
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
        <li><NavLink to="/about/kim" activeStyle={activeStyle}>About Kim</NavLink></li>
        <li><NavLink to="/posts" activeStyle={activeStyle}>Post</NavLink></li>
      </ul>
  </div>
  );
};

export default NavLinkMenu;