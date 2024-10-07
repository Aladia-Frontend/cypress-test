<template>
    <div class="login-form">
        <Textbox v-model="email" placeholder="Email" />
        <Textbox v-model="password" placeholder="Password" type="password" />
        <Button label="Login" @click="login" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Button from './Button.vue';
import Textbox from './Textbox.vue';

const email = ref('');
const password = ref('');

const login = () => {
    alert(`Logging in with Email: ${email.value} and Password: ${password.value}`);
};
</script>

<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 300px;
    margin: auto;
    align-items: center;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
    width: 100%;
}

button:hover {
    background-color: #379d71;
}
</style>