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
            :username="$root.store.username"
          />
          <b-button variant="outline-primary" class="more-recipes-button" @click="fetchRandomRecipes">More Recipes</b-button>
        </div>
        <div class="right-column">
          <router-link v-if="!$root.store.username" to="/login" v-slot="{ href, navigate }" custom>
            <b-button variant="outline-primary" class="login-button" :href="href" @click="navigate">Login to view your last viewed recipes</b-button>
          </router-link>
          <RecipePreviewList
            v-if="$root.store.username"
            ref="lastViewedRecipesList"
            title="Last viewed recipes"
            :initialRecipes="lastViewedRecipes"
            class="LastViewedRecipes center"
            :username="$root.store.username"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import { BButton } from 'bootstrap-vue';

export default {
  components: {
    RecipePreviewList,
    BButton
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
  padding-bottom: 70px;
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
  position: relative;
}

.more-recipes-button {
  position: absolute;
  left: 160px; 
  bottom: -30px;
}

.login-button {
  position: absolute;
  left: 70px; 

}

.blur {
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
