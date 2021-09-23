import React from "react";

function CardItems(props) {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <img src="./pizza.jpg" alt="recipe" />
        </div>
        <div className="card-description">
          <p>test card items</p>
        </div>
      </div>
    </>
  );
}

export default CardItems;
