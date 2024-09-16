<template>
  <b-container>
    <h3>
      {{page_title}}
      <slot></slot>
    </h3>
    <b-col v-for="r in recipes" :key="r.id">
      <br>
      <RecipePreview class="recipePreview" :recipe="r" />
    </b-col>
    
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
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
      description:["My grandpa's favorite dish for Shavu'ot Holiday","My mom's most famous dish for Saturday Breakfast", "My Dad's Artichok for Monday Evening"],
      recipes: [],
      isFamily: false
    };
  },
  methods: {
    async updateRecipes() {
    // responsible for random recipes only
      try
      {
      
            if (this.title === "Last viewed recipes" || this.title==="Explore these recipes")
              {
              const response = await this.axios.get(
              this.$root.store.server_domain + "/recipes/random",
              {
                withCredentials: true
              }
            );
            this.recipes = response.data;
            }
            else if (this.title === "Users Favorite Recipes")
              {
              const response = await this.axios.get(
              this.$root.store.server_domain + "/users/favorites",
              {
                withCredentials: true
              }
            );
            this.recipes = response.data;
            }
      }
      catch (error) {
        console.error("Error fetching recipes:", error);
      }
        
    }
  },
  mounted() {
    this.updateRecipes(); // Initial update when component mounts
  },
  

};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
