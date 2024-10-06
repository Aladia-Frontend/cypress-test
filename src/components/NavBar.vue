<template>
    <nav>
        <router-link v-for="route in filteredRoutes" :key="route.name" :to="route.path">
            <button>{{ route.meta?.label || route.name }}</button>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        routes: {
            type: Array,
            required: true
        }
    },
    computed: {
        filteredRoutes() {
            return this.routes.filter(route => route.meta?.label);
        }
    }
};
</script>

<style scoped>
button {
    padding: 10px 20px;
    margin: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #2c3e50;
}
</style>