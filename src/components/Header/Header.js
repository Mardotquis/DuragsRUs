import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <NavLink
        to="/home"
        className="header__name"
        activeClassName="active"
        exact
      >
        DuragsRUs
      </NavLink>
      <NavLink to="/">
        <div className="header__icon" />
      </NavLink>

      <ul className="header__extralinks">
        <li>
          {" "}
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
