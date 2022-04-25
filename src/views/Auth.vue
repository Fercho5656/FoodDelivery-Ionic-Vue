<template>
  <component :is="component" @switchView="switchViews" />
  <Footer />
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import { ref, shallowRef } from "vue";

const component = shallowRef(Login);

const switchViews = (newView) => {
  component.value = newView;
};
</script>

<style>
</style>