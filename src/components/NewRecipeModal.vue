<template>
  <div>
    
    <b-modal v-model="modalOpen" title="Create New Recipe" size="sm" no-backdrop>
      <form @submit.prevent="createRecipe">
        <div class="form-group">
          <label for="recipeName">Recipe Name</label>
          <input type="text" class="form-control" id="recipeName" v-model="newRecipe.name">
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">Create Recipe</button>
          <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false,
      newRecipe: {
        name: '' // Initialize any other fields you need for your recipe
      }
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    createRecipe() {
      this.modalOpen = false;
    }
  }
};
</script>
