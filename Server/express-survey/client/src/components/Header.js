import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLink() {
    return (
      <ul style={{"list-style": "none"}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/surveys">Dashboard</Link>
        </li>
        <li>
          <Link to="/surveys/new">New Survey</Link>
        </li>
      </ul>
    );
  }

  render() {
    return <div>{this.renderLink()}</div>;
  }
}

export default Header;
