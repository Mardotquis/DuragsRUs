import React, { Component } from "react";

import pinkRag from "../../assets/img/hero/hero1.jpg";
import blackRag from "../../assets/img/hero/hero22.jpg";
import goldRag from "../../assets/img/hero/hero3.jpg";

// import blackShorts from "../../assets/img/shorts/shorts1.jpg";
// import supremeShorts from "../../assets/img/shorts/shorts8.jpg";
// import givShorts from "../../assets/img/shorts/shorts6.jpg";

let duragArray = [];
// let shortsArray = [];
let duragTime = 5000;
let i = 0;

duragArray[0] = `url(${pinkRag})`;
duragArray[1] = `url(${blackRag})`;
duragArray[2] = `url(${goldRag})`;

// shortsArray[0] = `url(${blackShorts})`;
// shortsArray[1] = `url(${supremeShorts})`;
// shortsArray[2] = `url(${givShorts})`;

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
