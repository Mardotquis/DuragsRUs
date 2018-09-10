import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <p className="header__name">DuragsRUs</p>
      <NavLink to="/">
        <div className="header__icon" />
      </NavLink>
      <ul className="header__extralinks">
        <NavLink to="/products">Products</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
};

export default Header;
