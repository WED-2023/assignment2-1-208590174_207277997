<template>
    <div>
      
      <b-modal v-model="showModal" title="Create New Recipe" size="sm" no-backdrop >
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
    
    <!-- <b-button v-b-modal.modal-scrollable>Launch scrolling modal</b-button>

    <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
        <p class="my-4" v-for="i in 20" :key="i">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
    </b-modal> -->
    </div>
  </template>
  
  <script>
  export default {
    props:['showModal'],
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
        // Logic to create the recipe goes here
        // For example, you can make an API call to save the new recipe data
        // After creating the recipe, close the modal
        this.modalOpen = false;
      }
    }
  };
  </script>
  