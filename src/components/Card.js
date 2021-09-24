import React from "react";
import CardItems from "./CardItems";

function Card(props) {
  return (
    <div className="card-group">
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
    </div>
  );
}

export default Card;
