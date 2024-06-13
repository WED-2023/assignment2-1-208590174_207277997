<template>
  <div class="container">
    <div class="background-image"></div>
    <div class="content">
      <h1 class="title">Main Page</h1>
      <div class="columns">
        <div class="left-column">
          <RecipePreviewList
            ref="randomRecipesList"
            title="Explore these recipes"
            :initialRecipes="randomRecipes"
            class="RandomRecipes center"
          />
          <button @click="fetchRandomRecipes">Fetch New Recipes</button>
        </div>
        <div class="right-column">
          <router-link v-if="!$root.store.username" to="/login" v-slot="{ href, navigate }" custom>
            <button :href="href" @click="navigate">Login to view your last viewed recipes</button>
          </router-link>
          <RecipePreviewList
            v-if="$root.store.username"
            ref="lastViewedRecipesList"
            title="Last viewed recipes"
            :initialRecipes="lastViewedRecipes"
            class="LastViewedRecipes center"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      randomRecipes: [], 
      lastViewedRecipes: [] 
    };
  },
  mounted() {
    if (this.$root.store.username) {
      this.fetchLastViewedRecipes(); // Fetch last viewed recipes for logged-in users
    }
    this.fetchRandomRecipes(); // Fetch initial random recipes
  },
  methods: {
    async fetchRandomRecipes() {
      try {
        await this.$refs.randomRecipesList.updateRecipes(3); // Call updateRecipes with amount
      } catch (error) {
        console.error("Error fetching random recipes:", error);
      }
    },
    async fetchLastViewedRecipes() {
      try {
        // Fetch last viewed recipes using the RecipePreviewList's updateRecipes method
        await this.$refs.lastViewedRecipesList.updateRecipes(3); // Call updateRecipes with amount
      } catch (error) {
        console.error("Error fetching last viewed recipes:", error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.content {
  position: relative;
  z-index: 1;
}

.RandomRecipes,
.LastViewedRecipes {
  margin: 10px 0 10px;
}

.columns {
  display: flex;
}

.left-column,
.right-column {
  flex: 1;
  padding: 10px;
}

.blur {
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
