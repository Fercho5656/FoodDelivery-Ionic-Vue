<template>
  <ion-header>
    <ion-text color="dark">
      <h1>Create an account</h1>
    </ion-text>
  </ion-header>
  <ion-card>
    <ion-card-header>
      <ion-icon :icon="personCircle"></ion-icon>
    </ion-card-header>
  </ion-card>
</template>

<script script>
import {
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonText,
  IonIcon,
} from "@ionic/vue";

import {personCircle} from "ionicons/icons";
import Input from "./Input.vue";
</script>

<style>
</style>