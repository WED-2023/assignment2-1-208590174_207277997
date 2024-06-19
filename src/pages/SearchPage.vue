<template>
  <div class="search-container">
    <div class="search-bar">
      <input
        type="text"
        v-model="query"
        placeholder="Search for recipes..."
      />
      <div class="amount-container">
        <label for="amount" class="amount-label">Number of results:</label>
        <select v-model="amount" id="amount" class="amount-input">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <button @click="searchRecipes" class="action-button">Search</button>
    </div>
    <div class="search-bar-options">
      <div class="action-buttons">
        <button @click="toggleFilters" class="action-button">{{ showFilters ? 'Hide Filters' : 'Show Filters' }}</button>
        <label for="sort" class="sort-label">Sort by:</label>
        <select v-model="sortCriteria" id="sort" class="sort-input">
          <option value="preparationTime">Preparation Time</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </div>

    <div class="main-content">
      <div v-if="showFilters" class="filter-toolbar">
        <h3 class="filter-title">Filters</h3>
        <div class="filters-columns">
          <!-- Cuisine Filters -->
          <div class="filter-category">
            <h4>Cuisine</h4>
            <div
              v-for="(cuisine, index) in cuisineOptions"
              :key="index"
              class="filter-option"
            >
              <input
                type="checkbox"
                :id="'cuisine-' + cuisine.value"
                :value="cuisine.value"
                v-model="selectedCuisines"
              />
              <label :for="'cuisine-' + cuisine.value">{{ cuisine.text }}</label>
            </div>
          </div>

          <!-- Diet Filters -->
          <div class="filter-category">
            <h4>Diet</h4>
            <div
              v-for="(diet, index) in dietOptions"
              :key="index"
              class="filter-option"
            >
              <input
                type="checkbox"
                :id="'diet-' + diet.value"
                :value="diet.value"
                v-model="selectedDiets"
              />
              <label :for="'diet-' + diet.value">{{ diet.text }}</label>
            </div>
          </div>

          <!-- Intolerance Filters -->
          <div class="filter-category">
            <h4>Intolerances</h4>
            <div
              v-for="(intolerance, index) in intoleranceOptions"
              :key="index"
              class="filter-option"
            >
              <input
                type="checkbox"
                :id="'intolerance-' + intolerance.value"
                :value="intolerance.value"
                v-model="selectedIntolerances"
              />
              <label :for="'intolerance-' + intolerance.value">{{ intolerance.text }}</label>
            </div>
          </div>
        </div>
      </div>

      <b-container class="recipes-container">
        <b-row v-for="r in sortedRecipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-row>
      </b-container>
    </div>
  </div>
</template>


<script>
import RecipePreview from "../components/RecipePreview";
import { mockSearchRecipes } from "../services/recipes.js";
import { cuisineOptions, dietOptions, intoleranceOptions } from "../assets/filters.js";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  data() {
    return {
      query: "",
      recipes: [],
      amount: 5, // Default amount of results
      selectedCuisines: [],
      selectedDiets: [],
      selectedIntolerances: [],
      cuisineOptions,
      dietOptions,
      intoleranceOptions,
      showFilters: false, // Control visibility of filters
      sortCriteria: "preparationTime" // Default sort criteria
    };
  },
  computed: {
    sortedRecipes() {
      if (this.sortCriteria === "preparationTime") {
        return [...this.recipes].sort((a, b) => a.preparationTime - b.preparationTime);
      } else if (this.sortCriteria === "popularity") {
        return [...this.recipes].sort((a, b) => b.popularity - a.popularity);
      }
      return this.recipes;
    }
  },
  methods: {
    async searchRecipes() {
      if (this.query.trim() === "") return;
      try {
        const response = await mockSearchRecipes(
          this.query,
          this.amount,
          this.selectedCuisines,
          this.selectedDiets,
          this.selectedIntolerances
        );
        const recipes = response.data.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
  },
};
</script>

<style scoped>
.search-container {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.search-bar input[type="text"] {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px; /* Rounded corners */
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  border: 1px solid #ccc; /* Optional: Add border to match buttons */
}

.amount-container {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.amount-label {
  margin-right: 5px;
  font-size: 16px;
}

.amount-input {
  padding: 10px;
  font-size: 16px;
  border-radius: 10px; /* Rounded corners */
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  border: 1px solid #ccc; /* Optional: Add border to match buttons */
}

.action-buttons {
  display: flex;
  align-items: center;
}

.sort-label {
  margin-right: 5px;
  font-size: 16px;
}

.sort-input {
  padding: 10px;
  font-size: 16px;
  border-radius: 10px; /* Rounded corners */
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  border: 1px solid #ccc; /* Optional: Add border to match buttons */
  margin-left: 10px; /* Adjusted margin to move it right */
}

.filter-toggle {
  display: flex;
  justify-content: flex-start; /* Align the button to the left */
  margin-bottom: 20px;
}

.filter-toggle button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px; /* Rounded corners */
  background: transparent; /* Transparent background */
  color: #007bff;
  border: 1px solid #007bff; /* Solid border for better visibility */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filter-toggle button:hover {
  background-color: rgba(0, 123, 255, 0.1); /* Slightly colored background on hover */
}

.action-button,
.sort-input {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px; /* Rounded corners */
  background: transparent; /* Transparent background */
  color: #007bff;
  border: 1px solid #007bff; /* Solid border for better visibility */
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
}

.action-button:hover,
.sort-input:hover {
  background-color: rgba(0, 123, 255, 0.1); /* Slightly colored background on hover */
}

.main-content {
  display: flex;
  position: relative;
}

.recipes-container {
  flex: 3;
}

.filter-toolbar {
  flex: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-right: 20px; /* Add margin to separate it from the recipes */
}

.filter-title {
  margin-bottom: 20px;
  font-size: 30px;
  color: #333;
  text-align: center;
}

.filters-columns {
  display: flex;
  justify-content: space-between; 
}

.filter-category {
  flex: 1;
  margin-right: 30px; 
}

.filter-category:last-child {
  margin-right: 0; 
}

.filter-category h4 {
  margin-bottom: 10px;
}

.filter-option {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.filter-option input[type="checkbox"] {
  margin-right: 10px;
}

.filter-option label {
  font-size: 14px;
}
</style>
