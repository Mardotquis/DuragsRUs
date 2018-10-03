import React from "react";
import { NavLink } from "react-router-dom";
import auth0Client from "../../Auth/Auth";

const Header = () => {
  const toggleMenuIcon = () => {
    const menuIcon = document.querySelector('.menu__icon');
    const biggerMenu = document.querySelector('.header__hidden_links');
    biggerMenu.style.display = "flex";
  }
  return (
    <header>
      <nav className="header">
        <NavLink
          to="/"
          className="header__name"
          activeClassName="activeLink"
          exact
        >
          DuragsRUs
      </NavLink>
        <NavLink to="/">
          <div className="header__icon" />
        </NavLink>

        <ul className="header__extralinks">
          <li>
            <NavLink to="/products" activeClassName="activeLink">
              Products
          </NavLink>
          </li>

          <li>
            <NavLink to="/contact" activeClassName="activeLink">
              Contact
          </NavLink>
          </li>
          {/* <li>
          <NavLink to="/admin" >
            <div className="accountToggle"></div>
          </NavLink>
        </li> */}

          <div className="auth0">
            {auth0Client.isAuthenticated() ? (
              <div>
                <li>
                  <NavLink to="/admin" className="accountToggle"> </NavLink>
                </li>
                <li><NavLink to="/admin/contact-info" className="contactToggle"></NavLink></li>
              </div>



            ) : null}

            {/* AUTH0 */}
            {!auth0Client.isAuthenticated() && (
              <li className="header__auth" onClick={auth0Client.signIn} >Log In</li>
            )}
            {auth0Client.isAuthenticated() && (
              <li className="header__auth" onClick={auth0Client.signOut} >Log Out</li>
            )}
          </div>

        </ul>
        <ul className="header__hidden_links">
          <li>
            <NavLink to="/products" activeClassName="activeLink">
              Products
          </NavLink>
          </li>

          <li>
            <NavLink to="/contact" activeClassName="activeLink">
              Contact
          </NavLink>
          </li>
          {/* <li>
          <NavLink to="/admin" >
            <div className="accountToggle"></div>
          </NavLink>
        </li> */}

          <div className="auth0">
            {auth0Client.isAuthenticated() ? (
              <div>
                <li>
                  <NavLink to="/admin" className="accountToggle"> </NavLink>
                </li>
                <li><NavLink to="/admin/contact-info" className="contactToggle"></NavLink></li>
              </div>



            ) : null}

            {/* AUTH0 */}
            {!auth0Client.isAuthenticated() && (
              <li className="header__auth" onClick={auth0Client.signIn} >Log In</li>
            )}
            {auth0Client.isAuthenticated() && (
              <li className="header__auth" onClick={auth0Client.signOut} >Log Out</li>
            )}
          </div>

        </ul>

      </nav >
      <div className="header__overlay">
        <div className="menu__icon" onClick={toggleMenuIcon} />
      </div>
    </header>
  );
};

export default Header;
