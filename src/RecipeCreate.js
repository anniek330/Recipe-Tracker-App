import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <div className="recipe-create">
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                value={recipe.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                placeholder="Cuisine"
                type="text"
                name="cuisine"
                id="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
              />
            </td>
           <td>
              <input
                placeholder="URL"
                type="text"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
              />
            </td>
           <td>
              <textarea
                placeholder="Ingredients"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                placeholder="Preparation"
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>);
}

export default RecipeCreate;
