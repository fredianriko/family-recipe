import React from "react";
import spaghetti from "../assets/image/spaghetti.jpg";
import burger from "../assets/image/";

function Hero() {
  const data = [
    {
      image: spaghetti,
      caption: "spagetti",
    },
    {
      image: burger,
      caption: "burger",
    },
    {
      image: sushi,
      caption: "sushi",
    },
    {
      image: steak,
      caption: "steak",
    },
  ];

  return (
    <>
      <div className="hero-container ">
        <img src={data} alt="" />
      </div>
      ;
    </>
  );
}

export default Hero;
