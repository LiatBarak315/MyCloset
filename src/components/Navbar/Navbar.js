import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/my-closet">
        My Closet
      </NavLink>
      <NavLink activeClassName="active" to="/search">
        Search
      </NavLink>
      <NavLink activeClassName="active" to="/add-new">
        Add New
      </NavLink>
    </nav>
  );
};

export default Navbar;
