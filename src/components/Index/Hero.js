import React, { Component } from "react";

import pinkRag from "../../assets/img/hero/hero1.jpg";
import blackRag from "../../assets/img/hero/hero22.jpg";
import goldRag from "../../assets/img/hero/hero3.jpg";

import blackShorts from "../../assets/img/shorts/shorts1.jpg";

let duragArray = [];
let shortsArray = [];
let duragTime = 4500;
let i = 0;

duragArray[0] = `url(${pinkRag})`;
duragArray[1] = `url(${blackRag})`;
duragArray[2] = `url(${goldRag})`;
// duragArray[3] = `url(${blackShorts})`;

class HeroImg extends Component {
  heroSlider = () => {
    let imgShuffle = document.querySelector(".imgShuffle");

    if (imgShuffle) {
      imgShuffle.style.backgroundImage = duragArray[i];
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
      <section>
        <div className="imgShuffle">
          <p className="imgCaption">Quality Durags</p>
        </div>
        <div>
          <p />
        </div>
        <div>
          <p />
        </div>
        <div>
          <p />
        </div>
      </section>
    );
  }
}

export default HeroImg;
