<template>
  <div>
     <b-modal v-model="modalOpen" title="Create New Recipe" size="lg" class="modal-footer" no-backdrop hide-footer>
       <form @submit.prevent="createRecipe" class="recipe-form">
     <h2>Add a New Recipe</h2>
     <div class="form-group">
       <label for="recipeTitle">Recipe Title</label>
       <input type="text" class="form-control" id="recipeTitle" v-model="newRecipe.title">
     </div>
     <div class="form-group">
       <label for="image">Image URL</label>
       <input type="text" class="form-control" id="image" v-model="newRecipe.image">
     </div>
     <div class="form-row">
       <div class="form-group">
         <label for="readyInMinutes">Ready In Minutes</label>
         <input type="number" class="form-control" id="readyInMinutes" v-model="newRecipe.readyInMinutes">
       </div>
       <div class="form-group">
         <label for="aggregateLikes">Aggregate Likes</label>
         <input type="number" class="form-control" id="aggregateLikes" v-model="newRecipe.aggregateLikes">
       </div>
     </div>
     <div class="form-group form-check-row">
       <div>
         <input type="checkbox" id="vegetarian" v-model="newRecipe.vegetarian">
         <label for="vegetarian">Vegetarian</label>
       </div>
       <div>
         <input type="checkbox" id="vegan" v-model="newRecipe.vegan">
         <label for="vegan">Vegan</label>
       </div>
       <div>
         <input type="checkbox" id="glutenFree" v-model="newRecipe.glutenFree">
         <label for="glutenFree">Gluten Free</label>
       </div>
     </div>
     <div class="form-group">
       <label for="summary">Summary</label>
       <textarea class="form-control" id="summary" v-model="newRecipe.summary"></textarea>
     </div>
 
     <div class="form-group">
       <label>Ingredients</label>
       <div v-for="(ingredient, index) in newRecipe.extendedIngredients" :key="index" class="ingredient-group">
         <input type="text" class="form-control" v-model="ingredient.name" placeholder="Ingredient Name">
         <input type="number" class="form-control" v-model="ingredient.amount" placeholder="Amount">
         <select class="form-control" v-model="ingredient.unit">
           <option value="">Measure Unit</option>
           <option value="Tbsp">tablespoon</option>
           <option value="Spoon">teaspoon</option>
           <option value="Cups">cups</option>
           <option value="Grams">grams</option>
           <option value="ml">ounces</option> </select>
         <button type="button" class="btn btn-danger" @click="removeIngredient(index)">Remove</button>
       </div>
       <button type="button" class="btn btn-secondary" @click="addIngredient">Add Ingredient</button>
     </div>
 
     <div class="form-group">
       <label for="instructions">Instructions</label>
       <textarea class="form-control" id="instructions" v-model="newRecipe.instructions"></textarea>
     </div>
     <div class="modal-footer">
       <button type="submit" class="btn btn-primary">Create Recipe</button>
       <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
     </div>
   </form>
   </b-modal>
   </div>
 </template>
 
 <script>
 import {mockAddUserRecipe} from "../services/user.js";
 import FileSaver from 'file-saver';
 export default {
   data() {
     return {
       modalOpen: false,
       newRecipe: {
         title: '',
         image: '',
         readyInMinutes: 0,
         aggregateLikes: 0,
         vegetarian: false,
         vegan: false,
         glutenFree: false,
         summary: '',
         instructions: '',
         extendedIngredients: []
       }
     };
   },
   methods: {
     openModal() {
       this.modalOpen = true;
     },
     closeModal() {
       this.modalOpen = false;
     },
     addIngredient() {
       this.newRecipe.extendedIngredients.push({ name: '', amount: 1, unit: '' });
     },
     removeIngredient(index) {
       this.newRecipe.extendedIngredients.splice(index, 1);
     },
     transformIngredients(ingredients) {
       return ingredients.map(ingredient => ({
         id: Math.floor(Math.random() * 100000), // Generating a random ID for demonstration
         aisle: "", // You can set this according to your data
         image: "", // You can set this according to your data
         consistency: "SOLID", // Assuming solid, you can adjust as needed
         name: ingredient.name,
         nameClean: ingredient.name,
         original: `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`,
         originalName: ingredient.name,
         amount: ingredient.amount,
         unit: ingredient.unit,
         meta: [],
         measures: {
           us: {
             amount: ingredient.amount,
             unitShort: ingredient.unit,
             unitLong: ingredient.unit
           },
           metric: {
             amount: ingredient.amount,
             unitShort: ingredient.unit,
             unitLong: ingredient.unit
           }
         }
       }));
     },
     createRecipe() {
       const transformedIngredients = this.transformIngredients(this.newRecipe.extendedIngredients);
       const recipeDetails = {
         id: Math.floor(Math.random() * 1000000), // Generating a random ID for demonstration
         image: this.newRecipe.image,
         title: this.newRecipe.title,
         readyInMinutes: this.newRecipe.readyInMinutes,
         aggregateLikes: this.newRecipe.aggregateLikes,
         vegetarian: this.newRecipe.vegetarian,
         vegan: this.newRecipe.vegan,
         glutenFree: this.newRecipe.glutenFree,
         summary: this.newRecipe.summary,
         analyzedInstructions: [],
         instructions: this.newRecipe.instructions,
         extendedIngredients: transformedIngredients,
         servings: 2 // Assuming 2 servings for demonstration
       };
 
      
       if (!this.newRecipe.title || !this.newRecipe.image || this.newRecipe.readyInMinutes==0 || !this.newRecipe.summary || !this.newRecipe.instructions || this.newRecipe.extendedIngredients == 0) {
         alert('Please fill in all required fields.');
         return;
 
       }
       for (let ingredient of this.newRecipe.extendedIngredients) {
         if (!ingredient.name || !ingredient.amount || !ingredient.unit) {
           alert('Please fill in all ingredient fields.');
           return;
         }
       }
       
 
       const blob = new Blob([JSON.stringify(recipeDetails, null, 2)], { type: "application/json" });
       // FileSaver.saveAs(blob, "new_recipes.json");
       const response = mockAddUserRecipe(recipeDetails);
       this.modalOpen = false;
       this.$bvToast.toast("New Recipe was successfully added", {
             title: 'Notification',
             autoHideDelay: 5000,
             toaster: 'b-toaster-bottom-right',
             appendToast: true,
             variant: 'success'
           });
       console.log("Recipe Created:", recipeDetails);
     }
     
   }
 };
 
 /*
 TO DO: 1. send the json to the server
        2. make sure the UserRecipes page retrieves the user's recipes from the DB
 */
 </script>
 <style scoped>
 .recipe-form {
   background-color: #f8f9fa;
   padding: 20px;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 }
 
 .recipe-form h2 {
   text-align: center;
   margin-bottom: 20px;
 }
 
 .form-group {
   margin-bottom: 15px;
 }
 
 .form-row {
   display: flex;
   gap: 20px;
 }
 
 .form-check-row {
   display: flex;
   justify-content: space-between;
 }
 
 .form-check-row div {
   display: flex;
   align-items: center;
 }
 
 .form-check-row label {
   margin-left: 5px;
 }
 
 .ingredient-group {
   display: flex;
   align-items: center;
   gap: 10px;
   margin-bottom: 10px;
 }
 
 .form-control {
   flex: 1;
 }
 
 .btn {
   margin-top: 10px;
 }
 
 .modal-footer {
   display: flex;
   justify-content: space-between;
   margin-top: 20px;
 }
 </style>
 