<template>
  <b-container>
    <h3>
      {{page_title}}
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
import { mockGetUserRecipesPreview } from '../services/user.js';
import { mockGetFavoriteRecipesPreview} from "../services/user.js";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    username:String
  },
  data() {
    return {
      page_title:" ",
      recipes: []
    };
  },
  methods: {
    async updateRecipes(amount = 3) {
      try
      {
      if (this.title === "Users Own Recipes")
      {
        //recipes that the user has created
        const response = await mockGetUserRecipesPreview(amount,this.username);
        this.recipes = response.data.recipes;
        this.page_title="Recipes I have contributed:"
        
      }

      else if (this.title === "Last viewed recipes" || this.title==="Explore these recipes")
      {
        const response = await mockGetRecipesPreview(amount);
        this.recipes = response.data.recipes;
        this.page_title="Explore these recipes:"
        if (this.title==="Last viewed recipes")
          {this.page_title="Top Recipes:"}
      }
      else if (this.title ==="Users Favorite Recipes")
      {
        const response = await mockGetFavoriteRecipesPreview(amount);
        this.recipes = response.data.recipes;
        this.page_title="Recipes I Loved:"
      
      }
    }
       catch (error) {
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
