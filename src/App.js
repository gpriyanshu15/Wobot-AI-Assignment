import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RecipeDetailsPage from "./RecipeDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
    </Routes>
  );
}

export default App;
