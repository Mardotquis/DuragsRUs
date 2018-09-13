import React from "react";
import { NavLink, Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top_middle">
        <p>500 Main Street Charlotte, N.C. 28205</p>
        <Link to="/products">Products</Link>
        <a href="mailto:duragsrus@gmail.com">duragsrus@gmail.com</a>

        <a href="tel:7049999999">
          Tel:
          <span>(704) 999-9999</span>
        </a>
      </div>

      <div className="footer__socialmedia">
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook" />
        </a>
        <a href="https://www.snapchat.com">
          <i className="fab fa-snapchat" />
        </a>
      </div>

      <div className="footer__small">
        <small>2018 &copy; DuragsRUs</small>
        <div className="footer__payment_options">
          <a>
            <i className="fab fa-cc-visa" />
          </a>
          <a>
            <i className="fab fa-cc-mastercard" />
          </a>
          <a>
            <i className="fab fa-cc-discover" />
          </a>
          <a>
            <i className="fab fa-cc-amex" />
          </a>
          <a>
            <i className="fab fa-cc-paypal" />
          </a>
          <a>
            <i className="fab fa-apple-pay" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
