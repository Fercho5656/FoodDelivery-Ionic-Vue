<template>
  <component :is="Register"></component>
  <Footer />
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Login from "../components/Login.vue";
import Register from '../components/Register.vue';
import { ref } from "vue";

const components = [Login];
</script>

<style>
</style>