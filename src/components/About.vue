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
}

h1 {
  color: #42b983;
}
</style>