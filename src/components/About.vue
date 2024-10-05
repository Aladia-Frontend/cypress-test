<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is a simple About page for our Vue.js application.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About'
});
</script>

<style scoped>
.about {
  text-align: center;
  margin-top: 20px;
  /* Added background color and padding */
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
}

h1 {
  color: #42b983;
  /* Increased font size and added text shadow */
  font-size: 2.5em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
</style>