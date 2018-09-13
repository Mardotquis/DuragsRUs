import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <NavLink to="/" className="header__name">
        DuragsRUs
      </NavLink>
      <NavLink to="/">
        <div className="header__icon" />
      </NavLink>

      <ul className="header__extralinks">
        <NavLink to="/products">Products</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Header;
