import React from "react";
import { Link } from "react-router-dom";
const HomeBodyHero = props => {
  return (
    <div className="homebody__hero">
      <div className="hero__captions">
        <h2 className="hero__caption__header">{props.backgroundHeading}</h2>
        <Link to="/products" className="shop__link">
          shop now
        </Link>
      </div>
      <div className={props.backgroundImg} />
    </div>
  );
};

export default HomeBodyHero;
