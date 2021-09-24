import React from "react";
import pizza from "../assets/image/pizza.jpg";

function CardItems(props) {
  //   const [recipeName, setRecipeName] = useState("");

  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <label className="card-label">Recipe Name</label>
          <img src={pizza} alt="recipe" className="recipe-image" />
        </div>
        <div className="card-description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia blanditiis corporis error dolorum dolores! At quae pariatur non voluptatem optio repellendus est? Possimus debitis nulla laborum voluptas, a neque libero.</p>
        </div>
        <div className="card-button">
          <button className="view-button">View</button>
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
    </>
  );
}

export default CardItems;
