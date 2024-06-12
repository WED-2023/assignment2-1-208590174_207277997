<template>
    <div class="container">
      <div class="background-image"></div>
      <div class="content">
        <h1 class="title">My Recipes</h1>
        <RecipePreviewList title="UserRecipes" class="UserRecipes center" />
        <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to view this</router-link>
        {{ !$root.store.username }}
        <RecipePreviewList
          title="Last Viewed Recipes"
          :class="{
            UserRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          disabled
        ></RecipePreviewList>
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
    name: "my-recipes",
    components: {
      RecipePreviewList
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .background-image {
    background: url('@/assets/depositphotos_173034766-stock-photo-woman-writing-down-recipe.jpg') center/cover;
    position: absolute;
    top: 0;
    left: -140px;
    width: 140%;
    height: 100%;
    z-index: -1;
  }
  
  .content {
    position: relative; /* Ensure content stays above the background */
    z-index: 1; /* Ensure content stays above the background */
  }
  
  .UserRecipes {
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
  