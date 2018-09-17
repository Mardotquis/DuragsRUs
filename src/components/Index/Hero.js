import React, { Component } from "react";

import pinkRag from "../../assets/img/hero/hero1.jpg";
import blackRag from "../../assets/img/hero/hero22.jpg";
import goldRag from "../../assets/img/hero/hero3.jpg";

let duragArray = [];

let duragTime = 5000;
let i = 0;

duragArray[0] = `url(${pinkRag})`;
duragArray[1] = `url(${blackRag})`;
duragArray[2] = `url(${goldRag})`;

class HeroImg extends Component {
  heroSlider = () => {
    let duragShuffle = document.querySelector(".duragShuffle");

    if (duragShuffle) {
      duragShuffle.style.backgroundImage = duragArray[i];
      if (i < duragArray.length - 1) {
        i++;
      } else {
        i = 0;
      }
      setTimeout(this.heroSlider, duragTime);
    }
  };

  componentDidMount() {
    this.heroSlider();
  }

  render() {
    return (
      <div className="duragShuffle">
        <h1 className="imgCaption">Quality Durags</h1>
        {/* <Link to="/products" className="durag__hero_btn">
          shop durags
        </Link> */}
      </div>
    );
  }
}

export default HeroImg;
