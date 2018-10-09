import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top_middle">
        <p>500 Main Street Charlotte, N.C. 28205</p>
        <Link to="/products">Products</Link>
        <a href="mailto:duragsrus@gmail.com">duragsrus@gmail.com</a>

        <a href="tel:7049999999">
          Tel:
          <span>(704) 999-9999</span>
        </a>
      </div>

      <ul className="footer__socialmedia">
        <li><a href="https://www.instagram.com">
          <i className="fab fa-instagram" />
        </a></li>
        <li><a href="https://www.twitter.com">
          <i className="fab fa-twitter" />
        </a></li>
        <li><a href="https://www.facebook.com">
          <i className="fab fa-facebook" />
        </a></li>
        <li><a href="https://www.snapchat.com">
          <i className="fab fa-snapchat" />
        </a></li>
      </ul>

      <div className="footer__small">
        <small>2018 &copy; DuragsRUs</small>
        <ul className="footer__payment_options">
          <li><a>
            <i className="fab fa-cc-visa" />
          </a></li>
          <li><a>
            <i className="fab fa-cc-mastercard" />
          </a></li>
          <li><a>
            <i className="fab fa-cc-discover" />
          </a></li>
          <li><a>
            <i className="fab fa-cc-amex" />
          </a></li>
          <li><a>
            <i className="fab fa-cc-paypal" />
          </a></li>
          <li><a>
            <i className="fab fa-apple-pay" />
          </a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
