import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/feature">Feature</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signout">Sign Out</Link>
      </div>
    );
  }
}

export default Header;