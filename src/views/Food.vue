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
                <FoodForm @send-food="onSend" />
            </Modal>
            <Modal :show="editFoodModal" @close="editFoodModal = false">
                <FoodForm @send-food="onSendEdit" :food-data="editFood" :id="editId" :edit-mode="true" />
            </Modal>
            <h1>Food :D</h1>
            <ul>
                <li v-for="food in foods" :key="food.id">
                    <FoodCard :imgSrc="food.imageUrl" :imgAlt="food.description" :stars="food.stars" :price="food.price"
                        :name="food.name" :timeToCook="food.preparationMinutes" @delete-food="onDelete(food.id)"
                        @edit-food="onEdit(food)" />
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
    IonBackButton,
    toastController
} from '@ionic/vue'

import { addOutline } from 'ionicons/icons';

import FoodCard from '../components/FoodCard.vue';
import FoodForm from '../components/FoodForm.vue';
import Modal from '../components/Modal.vue';
import { onMounted, ref } from 'vue'

import { getAllFood, deleteFood } from '../services/food'

const foods = ref();
const addFoodModal = ref(false);
const editFoodModal = ref(false);

const editId = ref(null);
const editFood = ref(null);

onMounted(async () => {
    const data = await getAllFood();
    foods.value = data;
})

const onSend = (food) => {
    foods.value.push(food);
    addFoodModal.value = false;
}

const onSendEdit = (food) => {
    const index = foods.value.findIndex(f => f.id === food.id);
    foods.value.splice(index, 1, food);
    editFoodModal.value = false;
}

const onEdit = food => {
    console.log(food)
    editId.value = food.id;
    editFood.value = food;
    editFoodModal.value = true;
}

const onDelete = async id => {
    const res = await deleteFood(id);
    if (res.status === 204) {
        const toast = await toastController.create({
            message: 'Food deleted',
            duration: 2000,
            position: 'bottom'
        })
        toast.present();
        foods.value = foods.value.filter(food => food.id !== id);
    }
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