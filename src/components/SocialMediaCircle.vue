<template>
  <a
    class="socialmedia__anchor"
    :href="url"
    target="_blank"
    rel="noopener nonreferer"
  >
    <span class="socialmedia__span">
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

<style>
.socialmedia__span {
  width: 75px;
  height: 75px;

  border: 5px solid #ccc;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 100ms linear;
}

.socialmedia__anchor {
  text-decoration: none;
  color: inherit;
}

.socialmedia__anchor:hover .socialmedia__span {
  background-color: v-bind(color);
}

.socialmedia__anchor ion-icon {
  font-size: 32px;
  transition: font-size 100ms linear;
}

.socialmedia__anchor:hover ion-icon {
  font-size: 40px;
}
</style>