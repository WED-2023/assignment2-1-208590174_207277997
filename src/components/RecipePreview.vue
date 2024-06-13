<template>
  <div class="recipe-preview">
    <router-link
      :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
      class="recipe-link"
    >
      <div class="recipe-body">
        <img
          :src="recipe.image"
          class="recipe-image"
          @mouseover="showHoverEffect"
          @mouseout="hideHoverEffect"
        />
        <div v-if="hovered" class="image-hover">Click to view recipe</div>
      </div>
    </router-link>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>

      <ul class="recipe-overview">
        <li v-if="recipe.vegan">Vegan</li>
        <li v-else-if="recipe.vegetarian">Vegetarian</li>
      </ul>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.aggregateLikes }} likes</li>
        <li v-if="recipe.glutenFree">Gluten-Free</li>
        <li v-else>Contains Gluten</li>
      </ul>
      <div class="recipe-actions">
        <button @click="toggleFavorite" :class="{ 'favorite': isFavorite }">
          <i :class="['fas', 'fa-heart', { 'active': isFavorite }]"></i> 
          <span>{{ isFavorite ? "Favorited" : "Add to Favorites" }}</span>
        </button>
        <span v-if="viewed" class="viewed-indicator">Viewed</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // mounted() {
  //   this.axios.get(this.recipe.image).then((i) => {
  //     this.image_load = true;
  //   });
  // },
  data() {
    return {
      hovered: false,
      viewed: false,
      isFavorite: false
    };
  },
  methods: {
    showHoverEffect() {
      this.hovered = true;
    },
    hideHoverEffect() {
      this.hovered = false;
    },
    markAsViewed() {
      this.viewed = true;
      localStorage.setItem(`viewed_${this.recipe.id}`, 'true');
    },
    toggleFavorite(event) {
      event.stopPropagation();
      this.isFavorite = !this.isFavorite;
      localStorage.setItem(`favorite_${this.recipe.id}`, this.isFavorite.toString());
    }
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
  }
  
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-link {
  display: block;
  width: 100%;
  height: 100%;
}
.recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}
.recipe-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}
.image-hover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  opacity: 0.8;
  pointer-events: none;
}
.recipe-footer {
  padding: 10px;
  background-color: #f9f9f9;
}
.recipe-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recipe-overview {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
}
.recipe-overview li {
  flex: 1;
  text-align: center;
}
.recipe-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.recipe-actions button {
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.recipe-actions .viewed-indicator {
  font-size: 12px;
  color: #28a745;
}
</style>