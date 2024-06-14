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

      <button @click="toggleFilters">{{ showFilters ? 'Hide Filters' : 'Show Filters' }}</button>
      <button @click="searchRecipes">Search</button>
    </div>

    <div class="main-content">
      <b-container class="recipes-container">
        <b-row v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-row>
      </b-container>

      <!-- Filter toolbar -->
      <div class="filter-toolbar" v-if="showFilters">
        <h3 class="filter-title">Filters</h3>

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
    };
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
  margin-bottom: 20px;
}

.search-bar input[type="text"] {
  flex: 1;
  padding: 10px;
  font-size: 16px;
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
}

.search-bar button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
}

.search-bar button:hover {
  background-color: #0056b3;
}

.main-content {
  display: flex;
}

.recipes-container {
  flex: 3;
  margin-right: 20px;
}

.filter-toolbar {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9; /* Slightly different color */
  border-left: 1px solid #ccc;
}

.filter-title {
  margin-bottom: 20px;
  font-size: 30px;
  color: #333;
}

.filter-category {
  margin-bottom: 20px;
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

