import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
        <nav>
          <div class="nav-wrapper" style={{background:"#413c69"}}>
            <Link href="#" class="brand-logo">SCM</Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><NavLink to="/">Dashboard</NavLink></li>
              <li><NavLink to="/user">User Panel</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><small>Active a/c: <span id="account">{this.props.account}</span></small></li>
            </ul>
          </div>
        </nav>
    );
  }
}
export default Navbar;




