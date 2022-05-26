<template>
    <ion-page>
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
    IonContent
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
    grid-gap: 20px;
}
</style>