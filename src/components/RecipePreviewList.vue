<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-col v-for="r in recipes" :key="r.id">
      <RecipePreview class="recipePreview" :recipe="r" />
    </b-col>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    async updateRecipes(amount = 3) {
      try {
        const response = await mockGetRecipesPreview(amount); // Fetch recipes
        this.recipes = response.data.recipes;
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
  },
  mounted() {
    this.updateRecipes(); // Initial update when component mounts
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
