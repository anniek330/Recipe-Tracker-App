import React from "react";

//take data from recipe form and make into a  long table

function RecipeView({ recipe, deleteRecipe }) {
 
  return (
        <tr key={recipe.id}>
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td>
            <img
              src={recipe.photo}
              alt={recipe.name}
              width="100"
              height="100"
            />
          </td>
          <td className="content_td">
            <p>{recipe.ingredients}</p>
          </td>
          <td className="content_td">
            <p>{recipe.preparation}</p>
          </td>
          <td>
             <button name="delete" onClick={deleteRecipe}>
            Delete
          </button>
          </td>
        </tr>      
  );
}
export default RecipeView;




