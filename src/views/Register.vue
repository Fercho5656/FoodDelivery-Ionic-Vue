<template>
  <ion-page>
    <ion-header>
      <ion-text color="dark">
        <h1>Create an account</h1>
      </ion-text>
    </ion-header>
    <ion-card>
      <ion-card-header>
        <ion-icon :icon="personCircle" />
      </ion-card-header>
      <ion-card-content>
        <form @submit.prevent="onRegisterUser">
          <Input placeholder="Username" v-model="username" required>
          <ion-icon :icon="personCircle" />
          </Input>
          <Input type="password" placeholder="Password" v-model="password" required>
          <ion-icon :icon="lockClosed" />
          </Input>
          <Input type="password" placeholder="Confirm Password" v-model="confirmPassword" required>
          <ion-icon :icon="lockClosed" />
          </Input>
          <Input type="email" placeholder="Email" v-model="email">
          <ion-icon :icon="mail" />
          </Input>
          <ion-button type="submit">
            <ion-text>Sign up</ion-text>
          </ion-button>
          <router-link :to="{ name: 'Login' }" key="/login">
            <ion-button fill="clear">
              <ion-text>Already have an account? Login</ion-text>
            </ion-button>
          </router-link>
        </form>
      </ion-card-content>
    </ion-card>
    <Footer />
  </ion-page>
</template>

<script setup>
import {
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonText,
  IonIcon,
  IonButton,
  IonPage,
} from "@ionic/vue";

import { personCircle, lockClosed, mail } from "ionicons/icons";
import Input from "../components/Input.vue";
import Footer from '../components/Footer.vue';
import { ref } from "vue";

import { registerUser } from "../services/auth"

const username = ref();
const email = ref();
const password = ref();
const confirmPassword = ref();

const onRegisterUser = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  const user = {
    fullname: username.value,
    email: email.value,
    password: password.value,
    birthday: new Date("05/16/00"),
  };

  await registerUser(user);
};
</script>

<style scoped>
ion-card-header ion-icon {
  font-size: 64px;
}
</style>