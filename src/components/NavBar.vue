<template>
  <nav>
    <router-link v-for="route in filteredRoutes" :key="route.name" :to="route.path">
      <button>{{ route.meta?.label || route.name }}</button>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'NavBar',
  props: {
    routes: {
      type: Array as PropType<RouteRecordRaw[]>,
      required: true
    }
  },
  computed: {
    filteredRoutes(): RouteRecordRaw[] {
      return this.routes.filter((route: RouteRecordRaw) => route.meta?.label);
    }
  }
});
</script>

<style scoped>
button {
  padding: 10px 20px;
  margin: 10px;
  /* Updated background to a gradient */
  background: linear-gradient(135deg, #42b983, #2c3e50);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* Added transition effect */
  transition: background 0.3s, transform 0.2s;
}

button:hover {
  /* Reverse gradient on hover and add slight scale */
  background: linear-gradient(135deg, #2c3e50, #42b983);
  transform: scale(1.05);
}
</style>