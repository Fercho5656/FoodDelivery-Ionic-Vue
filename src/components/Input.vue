<template>
  <ion-item>
    <ion-label position="floating"> <slot></slot>{{ placeholder }} </ion-label>
    <ion-input
      :type="type"
      :value="modelValue"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
    ></ion-input>
  </ion-item>
</template>

<script setup>
import { IonItem, IonLabel, IonInput } from "@ionic/vue";
defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
  modelValue: String,
  required: Boolean,
});
</script>

<style scoped>
slot {
  font-size: 5em;
}
</style>