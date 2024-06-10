<template>
  <div id="app">
    
    <nav class="navbar fixed-top navbar-expand-lg">
      <div class="container-fluid">
        <!-- Left-aligned Search Bar -->
        <form class="form-inline mr-auto" @submit.prevent="goToSearch">
          <input class="form-control mr-sm-2" type="search" placeholder="What would you like to cook today?" v-model="searchQuery" aria-label="Search">
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </form>

        <!-- Center-aligned Navbar Links -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- <router-link :to="{ name: 'main' }" class="nav-link" exact-active-class="router-link-exact-active">All Recipes</router-link> -->
              <router-link :to="{ name: 'main' }" class="nav-link" >All Recipes</router-link>

            </li>
            <li class="nav-item">
              <!-- <router-link :to="{ name: 'about' }" class="nav-link" exact-active-class="router-link-exact-active">About</router-link> -->
              <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
            </li>
            
            <!-- If the user is logged in -->
            <template v-if="$root.store.username">
              <b-nav-item-dropdown right>
                <template #button-content>
                  Personal Region
                </template>
                <b-dropdown-item :to="{ name: 'favorites' }">Favorite Recipes</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'my-recipes' }">My Recipes</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'family-recipes' }">My Family Recipes</b-dropdown-item>
              </b-nav-item-dropdown>
              
                <!-- Navbar tabs -->
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a @click="openModal" class="nav-link">Create New Recipe</a>
                  </li>
                </ul>
               
              <!-- <router-link :to="{ name: 'new-recipe' }" class="nav-link">Create New Recipe</router-link> -->
              
                <b-nav-item-dropdown right>
                <template #button-content>
                  Hello {{ $root.store.username }}
                </template>
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
              </b-nav-item-dropdown>
            </template>

            <!-- If the user is not logged in -->
            <b-nav-item-dropdown right v-if="!$root.store.username">
              <template #button-content>
                Hello Guest
              </template>
              <b-dropdown-item :to="{ name: 'register' }">Register</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'login' }">Login</b-dropdown-item>
            </b-nav-item-dropdown>
          </ul>
        </div>

        <!-- Right-aligned Submit Recipe Button -->
      </div>
    </nav>
    
   
    <div class="background-image"></div>
    <router-view />
    <NewRecipeModal v-if="showModal" ref="newRecipeModal"></NewRecipeModal>
  </div>
</template>

<script>
import NewRecipeModal from './components/NewRecipeModal.vue';


export default {
  name: "App",
  data() {
    return {
      showModal: false,
      searchQuery: ''
    };
  },
  methods: {
    goToSearch() {
      this.$router.push({ name: 'search', query: { q: this.searchQuery } });
    },
    logout() {
      this.$root.store.logout();
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
      openModal() {
      // Call the openModal method of the NewRecipeModal component
      this.showModal = true;
     
    }
  
  },
  components: {
    NewRecipeModal,
    // MainPage

  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  padding-top: 100px; /* Adjust padding to prevent content from being hidden behind the fixed navbar */
}

.navbar {
  font-family: Georgia, serif;
  display: flex; /* Use flexbox layout */
  justify-content: space-between; /* Distribute space between items */
  align-items: center; /* Center items vertically */
  padding: 20px 20px;
  background-color: rgba(0, 0, 0, 0.5); /* Dark semi-transparent background */
  backdrop-filter: blur(10px); /* Optional: Add blur effect */
  height: 100px; /* Adjust the height as needed */
  width: 100%; /* Ensure the navbar takes the full width */
}

.navbar-nav {
  display: flex; /* Use flexbox layout for navbar links */
  align-items: center; /* Center items vertically */
  margin-left: auto; /* Move navbar links to the right */
}

.nav-link {
  font-weight: bold;
  color: #ffffff;
  margin-left: 15px;
}

.nav-link.router-link-exact-active {
  color: #ffffff;
}

.b-button.nav-link {
  background-color: transparent;
  border: none;
  padding: 0;
  color: #ffffff;
  font-weight: bold;
}

.form-inline {
  margin-right: auto; /* Push the search bar to the left */
}

.btn-primary {
  background-color: #ffffff;
  color: #000;
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
}


</style>