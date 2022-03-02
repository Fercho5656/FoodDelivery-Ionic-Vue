<template>
  <ion-header>
    <ion-text color="dark">
      <h1>
        Good Food for
        <br />Good Moments
      </h1>
    </ion-text>
  </ion-header>
  <ion-card>
    <ion-card-header></ion-card-header>
    <ion-card-content>
      <form>
        <ion-icon :icon="personCircle"></ion-icon>
        <Input placeholder="Username" required v-model="username">
          <ion-icon :icon="personCircle"></ion-icon>
        </Input>
        <Input
          type="password"
          placeholder="Password"
          required
          v-model="password"
        >
          <ion-icon :icon="lockClosed"></ion-icon>
        </Input>
        <ion-row class="ion-justify-content-center">
          <ion-item>
            <ion-button fill="clear" router-link href="/login">
              <ion-text>Forgot password?</ion-text>
            </ion-button>
            <ion-button type="submit" size="default">Login</ion-button>
          </ion-item>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-item>
            <ion-button fill="clear" router-link href="/register">
              <ion-text>Don't have an account? Sign up</ion-text>
            </ion-button>
          </ion-item>
        </ion-row>
      </form>
    </ion-card-content>
  </ion-card>
  <ion-footer>
    <ion-toolbar class="ion-padding-vertical">
      <ion-row class="ion-justify-content-evenly">
        <div v-for="media in socialMedia" :key="media.url">
          <SocialMediaCircle :color="media.color" :url="media.url">
            <ion-icon size="large" :icon="media.icon"></ion-icon>
          </SocialMediaCircle>
        </div>
      </ion-row>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup>
import {
  person,
  personCircle,
  lockClosed,
  logoWhatsapp,
  logoFacebook,
  logoInstagram,
} from "ionicons/icons";
import {
  IonInput,
  IonText,
  IonCard,
  IonCardContent,
  IonHeader,
  IonFooter,
  IonItem,
  IonLabel,
  IonToolbar,
  IonRow,
  IonButton,
  IonIcon,
  IonCardHeader,
} from "@ionic/vue";
import SocialMediaCircle from "../components/SocialMediaCircle.vue";
import Input from "../components/Input.vue";
import { ref } from "vue";

const socialMedia = [
  {
    url: "https://wa.me/5255555555555",
    icon: logoWhatsapp,
    color: "#25D366",
  },
  {
    url: "https://www.facebook.com/",
    icon: logoFacebook,
    color: "#4267B2",
  },
  {
    url: "https://www.instagram.com/",
    icon: logoInstagram,
    color: "#C13584",
  },
];

const username = ref();
const password = ref();
</script>

<style scoped>
h1 {
  line-height: 1.5em;
}

form > ion-icon {
  font-size: 7rem;
}
</style>