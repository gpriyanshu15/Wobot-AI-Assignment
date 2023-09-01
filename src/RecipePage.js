import React from "react";
import { Link } from "react-router-dom"; 
import "./RecipeStyles.css"; 

function RecipePage({ recipe }) {
  return (
    <div className="recipe-container">
      <Link to={`/recipe/${recipe.id}`}>
        <img className="recipe-image" src={recipe.image} alt={recipe.title} />
        <h2 className="recipe-title">{recipe.title}</h2>
      </Link>
    </div>
  );
}

export default RecipePage;
