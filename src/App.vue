<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg">
      <div class="container-fluid">
        <!-- Enhanced Search Bar -->
        <form class="enhanced-search form-inline mr-auto" @submit.prevent="goToSearch">
          <div class="search-wrapper">
            <input class="form-control form-control-search" type="search" placeholder="Search recipes..." v-model="searchQuery" aria-label="Search">
            <button type="submit" class="btn btn-search">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>

        <!-- Center-aligned Navbar Links -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'main' }" class="nav-link">All Recipes</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
            </li>
            
            <!-- If the user is logged in -->
            <template v-if="$root.store.username">
              <!-- Dropdown for Personal Region -->
              <b-nav-item-dropdown right>
                <template #button-content>
                  Personal Region
                </template>
                <b-dropdown-item :to="{ name: 'favorite-recipes' }">Favorite Recipes</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'my-recipes' }">My Recipes</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'family-recipes' }">My Family Recipes</b-dropdown-item>
              </b-nav-item-dropdown>
              
              <!-- Create New Recipe Link -->
              <li class="nav-item">
                <a @click="openModal" class="nav-link">Create New Recipe</a>
              </li>
              
              <!-- Logout Dropdown -->
              <b-nav-item-dropdown right>
                <template #button-content>
                  Hello {{ $root.store.username }}
                </template>
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
              </b-nav-item-dropdown>
            </template>

            <!-- If the user is not logged in -->
            <template v-else>
              <!-- Register Link -->
              <li class="nav-item">
                <router-link :to="{ name: 'register' }" class="nav-link btn-link">Register</router-link>
              </li>
              <!-- Login Link -->
              <li class="nav-item">
                <router-link :to="{ name: 'login' }" class="nav-link btn-link">Login</router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
    
    <NewRecipeModal ref="NewRecipeModal"></NewRecipeModal>
    <div class="background-image"></div>
    <router-view />
  </div>
</template>


<script>
import '@fortawesome/fontawesome-free/css/all.min.css';
import NewRecipeModal from './components/NewRecipeModal.vue';

export default {
  name: "App",
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    goToSearch() {
      if (this.searchQuery.trim() !== '') {
        this.$router.push({ name: 'search', query: { q: this.searchQuery } });
      }
    },
    logout() {
      this.$root.store.logout();
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    openModal() {
      this.$refs.NewRecipeModal.openModal();
    }
  },
  components: {
    NewRecipeModal,
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: 'Segoe UI';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  padding-top: 100px; /* Adjust padding to prevent content from being hidden behind the fixed navbar */
  background-image: url('@/assets/mae-mu-ppOPjqAJ3Mw-unsplash.jpg'); 
  background-size: cover;
  background-position: center;
}

.navbar {
  font-family: 'Segoe UI';
  display: flex; /* Use flexbox layout */
  justify-content: space-between; /* Distribute space between items */
  align-items: center; /* Center items vertically */
  padding: 20px 20px;
  background-color: rgba(0, 0, 0, 0.5); /* Dark semi-transparent background */
  backdrop-filter: blur(10px); /* Optional: Add blur effect */
  height: 80px; /* Adjust the height as needed */
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
  border-radius: 5px;
}

/* Enhanced Search Bar Styles */
.enhanced-search {
  position: relative;
  margin-right: auto; /* Push the search bar to the left */
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-control-search {
  width: calc(100% - 40px);
  border: 2px solid #ffffff; /* White border */
  padding: 10px;
  border-radius: 20px; /* Rounded corners */
  background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
  color: #ffffff; /* White text */
}

.btn-search {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #ffffff;
  padding: 8px;
}

.btn-search:hover {
  color: #ffffff; /* Change color on hover */
}

/* Styles for Login and Register buttons */
.btn-link {
  display: inline-block;
  padding: 8px 15px;
  margin: 5px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 20px;
  color: #ffffff;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-link:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent background on hover */
  color: #ffffff; /* Text color stays white */
}
</style>
