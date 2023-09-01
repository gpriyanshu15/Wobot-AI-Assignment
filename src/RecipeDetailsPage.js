import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import "./RecipeDetailStyles.css";

function RecipeDetailPage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const apiKey = "31b65b5f45d44df397b48012c08110b7";
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, [recipeId]);

  if (!recipe) {
    return null;
  }

  return (
    <div className="recipe-detail-container">
      <h1 className="recipe-detail-title">{recipe.title}</h1>
      <img
        className="recipe-detail-image"
        src={recipe.image}
        alt={recipe.title}
      />
      <p className="recipe-detail-description">{recipe.summary}</p>
      
    </div>
  );
}

export default RecipeDetailPage;
