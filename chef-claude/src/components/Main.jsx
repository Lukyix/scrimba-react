import React from "react";
import { useState } from "react";
import List from "./List";
import Recipe from "./Recipe";
import { getRecipeFromChefClaude } from "/src/ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "chicken",
    "all the main spices",
    "corn",
    "heavy cream",
    "pasta",
  ]);
  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <List getRecipe={getRecipe} ingredients={ingredients} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
