<template>
  <ion-footer>
    <ion-toolbar>
      <ion-row class="ion-justify-content-evenly">
        <div v-for="media in socialMedia" :key="media.url">
          <SocialMediaCircle :color="media.color" :url="media.url">
            <ion-icon :icon="media.icon"></ion-icon>
          </SocialMediaCircle>
        </div>
      </ion-row>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
</script>

<script setup>
import { ref } from "vue";
import { logoWhatsapp, logoFacebook, logoInstagram } from "ionicons/icons";
import { IonFooter, IonToolbar, IonRow, IonIcon } from "@ionic/vue";
import SocialMediaCircle from "./SocialMediaCircle.vue";

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
</script>

<style scoped>
ion-toolbar {
  padding-top: 16px;
  --ion-safe-area-bottom: 16px;
}
</style>