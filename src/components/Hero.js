import React from "react";

import spaghetti from "../assets/image/spaghetti.jpg";
import burger from "../assets/image/burger.jpg";
import sushi from "../assets/image/sushi.jpg";
import steak from "../assets/image/steak.jpg";
import LoginPage from "./LoginPage";

// mau bikin auto slide carousel/hero tapi masih gatau gimana caranya, tolong bang
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

  //   const iterateImage = data.map((items) => {
  //     console.log(items);
  //     <img src={items} />;
  //   });

  return (
    <div className="hero-container ">
      <img src={data[1].image} alt="" className="hero-image" />
      <LoginPage />
    </div>
  );
}

function ImageItem(props) {
  return <img src={props.image} alt="" />;
}

export default Hero;
