import React, { useState } from "react";

function NewRecipe() {
  return <ButtonClick />;
}

function ButtonClick() {
  const [active, setActive] = useState(false);
  console.log(active);

  const showForm = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="add-recipe">
        <button className="add-recipe-button" onClick={showForm}>
          Add New Recipe
        </button>
      </div>
      {active && (
        <form action="submit">
          <label> Add recipe Name</label>
          <br />
          <input type="text" placeholder="enter the recipe name here" />
        </form>
      )}
    </>
  );
}

export default NewRecipe;
