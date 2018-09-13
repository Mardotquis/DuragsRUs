import React from "react";
import { Link } from "react-router-dom";
import HomeBodyHero from "./HomeBodyHero";

const HomeBody = () => {
  return (
    <main className="homebody">
      <HomeBodyHero
        backgroundImg="durag__background"
        backgroundHeading="designer durags"
      />
      <HomeBodyHero
        backgroundImg="shorts__background"
        backgroundHeading="designer shorts"
      />
    </main>
  );
};

export default HomeBody;
