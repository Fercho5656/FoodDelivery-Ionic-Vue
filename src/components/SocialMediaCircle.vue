<template>
  <a :href="url" target="_blank" rel="noopener nonreferer">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script setup>
defineProps({
  url: String,
  color: String,
});
</script>

<style scoped>
span {
  width: 75px;
  height: 75px;

  border: 5px solid #ccc;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover span {
  background-color: v-bind(color);
}
</style>