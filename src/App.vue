<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <NavBar :routes="$router.options.routes" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  }
});
</script>

<style>
#app {
  /* Changed font family */
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  /* Adjusted top margin */
}

/* Added font import at the top of the style block */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
</style>