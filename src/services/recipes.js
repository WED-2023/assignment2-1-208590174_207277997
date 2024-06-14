// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";


export function mockGetRecipesPreview(amount = 1) {
  const recipeIds = Object.keys(recipe_preview);
  let recipes = [];

  for (let i = 0; i < amount; i++) {
    const randomId = recipeIds[Math.floor(Math.random() * recipeIds.length)];
    recipes.push(recipe_preview[randomId]);
  }

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  const recipe = recipe_full_view[recipeId];

  if (!recipe) {
    throw new Error(`Recipe with ID ${recipeId} not found`);
  }

  return { data: { recipe } };
}

export function mockSearchRecipes(query, amount, selectedCuisines, selectedDiets, selectedIntolerances) {
  return mockGetRecipesPreview(amount);
}