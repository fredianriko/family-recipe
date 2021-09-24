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

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add-recipe">
        <button className="add-recipe-button" onClick={showForm}>
          Add New Recipe
        </button>
      </div>
      {active && (
        <form action="submit" className="input-new-recipe">
          <label> Add recipe Name</label>
          <br />
          <input type="text" placeholder="enter the recipe name here" className="new-recipe-name" />
          <br />
          <label>Add Description Here</label>
          <br />
          <textarea name="" id="" cols="50" rows="10" className="new-recipe-textarea">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate, temporibus neque vitae reiciendis explicabo ea eaque iure quod cumque eos nulla quos facere molestiae consequuntur quam corrupti voluptatem fugiat placeat
            itaque quis ullam praesentium vel? Incidunt atque eligendi numquam officiis reprehenderit reiciendis aliquid doloribus, vel magnam optio inventore consectetur blanditiis est pariatur eius quibusdam, nesciunt provident? In aut
            accusantium cupiditate adipisci quaerat maiores est voluptas dolorum molestiae cum totam excepturi, animi voluptatem quae tempore. Asperiores illo est consequatur rem, ullam, dolore praesentium dolorem autem numquam dolores aut,
            mollitia temporibus! Eos laudantium exercitationem eius illo soluta aliquam facilis veniam dignissimos!
          </textarea>
          <br />
          <label> Insert Images</label>
          <br />
          <button className="browse-image" onClick={handleClick}>
            Browse Image
          </button>
        </form>
      )}
    </>
  );
}

export default NewRecipe;
