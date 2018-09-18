import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <NavLink to="/" className="header__name" activeStyle="active" exact>
        DuragsRUs
      </NavLink>
      <NavLink to="/">
        <div className="header__icon" />
      </NavLink>

      <ul className="header__extralinks">
        <li>
          {" "}
          <NavLink to="/products" activeClassName="activeLink">
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" activeClassName="activeLink">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
