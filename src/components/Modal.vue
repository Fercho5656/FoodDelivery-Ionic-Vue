<template>
  <transition name="fade">
    <div class="modal-wrapper" v-if="showModal">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
export default {
  name: "Modal",
};
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
interface Props {
  show: boolean;
}
const showModal = ref(false);
const props = defineProps<Props>();
defineEmits(["close"]);
watch(props, () => {
  showModal.value = props.show;
});
</script>

<style>
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9998;
  overflow-y: auto;
}

.modal-background {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.modal-content {
  z-index: 9999;
  width: auto;
  height: auto;
  background-color: #222428;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(30, 32, 35, 0.50);
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>