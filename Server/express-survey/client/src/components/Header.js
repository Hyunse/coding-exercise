import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLink() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return <div>{this.renderLink()}</div>;
  }
}

export default Header;
