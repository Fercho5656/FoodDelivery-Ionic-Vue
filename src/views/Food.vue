<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-button slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-button>
                <ion-button slot="end" @click="addFoodModal = true">
                    <ion-icon :icon="addOutline"></ion-icon>
                </ion-button>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <Modal :show="addFoodModal" @close="addFoodModal = false">
                <AddFood @send-food="onSend"/>
            </Modal>
            <h1>Food :D</h1>
            <ul>
                <li v-for="food in foods">
                    <FoodCard :imgSrc="food.imageUrl" :imgAlt="food.description" :stars="food.stars" :price="food.price"
                        :name="food.name" :timeToCook="food.preparationMinutes" />
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
    IonIcon,
    IonButton,
    IonBackButton
} from '@ionic/vue'

import { addOutline } from 'ionicons/icons';

import FoodCard from '../components/FoodCard.vue';
import AddFood from '../components/AddFood.vue';
import Modal from '../components/Modal.vue';
import { onMounted, ref } from 'vue'

import { getAllFood } from '../services/food'

const foods = ref();
const addFoodModal = ref(false);

onMounted(async () => {
    const data = await getAllFood();
    foods.value = data;
})

const onSend = (food) => {
    foods.value.push(food);
    addFoodModal.value = false;
}
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