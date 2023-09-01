import React, { useEffect, useState } from "react";
import RecipePage from "./RecipePage";


function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiKey = "31b65b5f45d44df397b48012c08110b7";
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipePage key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
