<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/">
                    </ion-back-button>
                </ion-buttons>
                <ion-title>
                    <ion-text>
                        <h1>Restaurants</h1>
                    </ion-text>
                </ion-title>
                <ion-button @click="addRestaurantModal = true" fill="clear" slot="end">
                    <ion-icon class="icon" :icon="addOutline"></ion-icon>
                </ion-button>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ul>
                <li v-for="restaurant in restaurants" :key="restaurant.id">
                    <Restaurant @delete="onDelete(restaurant.id)" @edit="editMode(restaurant)"
                        :restaurant="restaurant" />
                </li>
            </ul>
        </ion-content>
        <Modal :show="addRestaurantModal" @close="addRestaurantModal = false">
            <RestaurantForm :categories="restaurantCategories" @send="onAdd" />
        </Modal>
        <Modal :show="editRestaurantModal" @close="editRestaurantModal = false">
            <RestaurantForm :edit-mode="true" :restaurant="restaurantToEdit" :categories="restaurantCategories"
                @send="onEdit" />
        </Modal>
    </ion-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonButton, IonButtons, IonTitle, IonIcon, IonContent, IonBackButton, IonText } from '@ionic/vue'
import { addOutline } from 'ionicons/icons'
import Modal from '../components/Modal.vue'
import RestaurantForm from '../components/RestaurantForm.vue'
import Restaurant from '../components/Restaurant.vue'
import { getRestaurantCategories } from '../services/restaurantCategories'
import { getAllRestaurants, addRestaurant, deleteRestaurant, editRestaurant } from '../services/restaurants';

const restaurants = ref([]);
const restaurantCategories = ref([]);

const restaurantToEdit = ref(null);

const addRestaurantModal = ref(false);
const editRestaurantModal = ref(false);

const onAdd = async restaurant => {
    const res = await addRestaurant(restaurant);
    if (res) {
        restaurants.value.push(res);
        addRestaurantModal.value = false;
    }
}
const onDelete = async id => {
    const res = await deleteRestaurant(id);
    if (res) {
        const index = restaurants.value.findIndex(restaurant => restaurant.id === id);
        restaurants.value.splice(index, 1);
    }
}
const onEdit = async (newRestaurant) => {
    const { id } = restaurantToEdit.value;
    const res = await editRestaurant(id, newRestaurant);
    if (res) {
        const index = restaurants.value.findIndex(restaurant => restaurant.id === id);
        restaurants.value[index] = { id, ...newRestaurant };
        editRestaurantModal.value = false;
        console.log(restaurants.value)
    }
}
const editMode = (oldRestaurant) => {
    restaurantToEdit.value = oldRestaurant;
    editRestaurantModal.value = true;
}

onMounted(async () => {
    restaurants.value = await getAllRestaurants();
    restaurantCategories.value = await getRestaurantCategories();
})
</script>

<style scoped>
.icon {
    font-size: 32px;
    color: #00a680;
}

ul {
    list-style: none;
    padding: 0;
}
</style>