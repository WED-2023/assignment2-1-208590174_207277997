<template>
    <div class="container">
      <div class="background-image"></div>
      <div class="content">
        <h1 class="title">My Family's Recipes</h1>
        <RecipePreviewList title="Family Recipes" class="FamilyRecipes center" />
        <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to view this</router-link>
        {{ !$root.store.username }}
        <!-- <RecipePreviewList
          title="Users Favorite Recipes"
          :username="$root.store.username"
          :class="{
            UserRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          
        ></RecipePreviewList> -->
      </div>
      <!-- <div
        style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
      >
        Centeredasdasdad
      </div>-->
    </div>
  </template>
  
  <script>
  import RecipePreviewList from "../components/RecipePreviewList";
  export default {
    name: "favorite-recipes",
    components: {
      RecipePreviewList
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    position: relative;
    width: 50%;
    height: 100%;
  }


  .background-image {
    background: url('@/assets/1400x919-Teriyaki-glazed-sausages-17be2d2a-3c7c-4b56-b87c-b342642f4dab-0-1400x919.jpg') center/cover;
    position: absolute;
    //top: 50;
    bottom: 0;
    left: -140px;
    width: 140%;
    height: 92%;
    z-index: -1;
  }
  
  .content {
    position: relative; /* Ensure content stays above the background */
    z-index: 1; /* Ensure content stays above the background */
  }
  
  .FamilyRecipes {
    margin: 10px 0 10px;
  }
  
  .blur {
    -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
    filter: blur(2px);
  }
  
  ::v-deep .blur .recipe-preview {
    pointer-events: none;
    cursor: default;
  }
  </style>
  