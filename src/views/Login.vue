<template>
  <ion-page>
    <ion-header>
      <ion-text color="dark">
        <h1>
          Good Food for
          <br />Good Moments
        </h1>
      </ion-text>
    </ion-header>
    <ion-card>
      <ion-card-header>
        <ion-icon :icon="personCircle"></ion-icon>
      </ion-card-header>
      <ion-card-content>
        <form @submit.prevent="onLogin">
          <Input placeholder="Email" required v-model="email">
          <ion-icon :icon="personCircle"></ion-icon>
          </Input>
          <Input type="password" placeholder="Password" required v-model="password">
          <ion-icon :icon="lockClosed"></ion-icon>
          </Input>
          <ion-row class="ion-justify-content-center">
            <ion-button fill="clear" router-link href="/forgotpassword">
              <ion-text>Forgot password?</ion-text>
            </ion-button>
            <ion-button type="submit" size="default">Login</ion-button>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <router-link :to="{ name: 'Register' }" key="/register">
              <ion-button fill="clear">
                <ion-text>Don't have an account? Sign up</ion-text>
              </ion-button>
            </router-link>
          </ion-row>
        </form>
      </ion-card-content>
    </ion-card>
    <Footer />
  </ion-page>
</template>

<script setup>
import { person, personCircle, lockClosed } from "ionicons/icons";
import {
  IonInput,
  IonText,
  IonCard,
  IonCardContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonToolbar,
  IonRow,
  IonButton,
  IonIcon,
  IonCardHeader,
  IonPage,
  useIonRouter,
} from "@ionic/vue";
import Input from "../components/Input.vue";
import Footer from '../components/Footer.vue';
import { login } from '../services/auth'
import { ref } from "vue";

const email = ref();
const password = ref();
const router = useIonRouter()

const onLogin = async () => {
  const user = {
    email: email.value,
    password: password.value,
  };
  const response = await login(user);
  if (response.token) {
    router.push("/");
  }
}
</script>

<style scoped>
h1 {
  line-height: 1.5em;
  font-weight: 700;
}

ion-card-header>ion-icon {
  font-size: 64px;
}
</style>