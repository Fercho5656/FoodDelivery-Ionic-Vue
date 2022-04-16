<template>
  <component :is="component" @switchView="switchViews" />
  <Footer />
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import { ref } from "vue";

const component = ref(Login);

const switchViews = (newView) => {
  component.value = newView;
};
</script>

<style>
</style>