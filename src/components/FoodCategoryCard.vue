<template>
  <ion-card @click="$emit('editFoodCategory')">
    <ion-card-header>
      <ion-card-title>
        <div class="wrapper">
          {{ name }}
          <ion-button @click="$emit('deleteFoodCategory')" class="delete" fill="clear">
            <ion-icon :icon="trashBinOutline"></ion-icon>
          </ion-button>
        </div>
      </ion-card-title>
    </ion-card-header>
  </ion-card>
</template>

<script setup>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { trashBinOutline } from "ionicons/icons";
const props = defineProps({
  name: String,
});
const emits = defineEmits(['editFoodCategory', 'deleteFoodCategory']);

</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete {
    color: #fff;
    font-size: 24px;
}
</style>