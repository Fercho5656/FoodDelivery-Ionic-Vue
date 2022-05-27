<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-button slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-button>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h1>Food :D</h1>
            <ul>
                <li v-for="i in 10">
                    <FoodCard imgSrc='https://i.imgur.com/JTAn4e0.jpg' :stars="i" :timeToCook="i" :price="i" />
                </li>
            </ul>
        </ion-content>
    </ion-page>
</template>

<script setup>
import {
    IonPage,
    IonContent,
    IonToolbar,
    IonHeader,
    IonButton,
    IonBackButton
} from '@ionic/vue'

import FoodCard from '../components/FoodCard.vue';
</script>

<style scoped>
ul {
    list-style: none;
    list-style-position: inside;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
</style>