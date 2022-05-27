<template>
    <h2>Add Food</h2>
    <form @submit.prevent="onSend">
        <Input placeholder="Name" v-model="name" />
        <Input placeholder="Price" type="number" v-model="price" />
        <Input placeholder="Image URL" v-model="imageUrl" />
        <Input placeholder="Description" v-model="description" />
        <Input placeholder="Stars" type="number" v-model="stars" />
        <Input placeholder="Preparation Minutes" type="number" v-model="preparationMinutes" />
        <ion-item>
            <ion-label>Category</ion-label>
            <ion-select v-model="categoryFoodId">
                <template v-for="category in categories" :key="category.id">
                    <ion-select-option :value="category.id">{{ category.name }}</ion-select-option>
                </template>
            </ion-select>
        </ion-item>
        <ion-button type="submit">Add Food</ion-button>
    </form>
</template>

<script setup>
import { IonButton, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import Input from './Input.vue';
import { onMounted, ref } from 'vue'
import { addFood } from '../services/food'
import { getFoodCategories } from '../services/foodCategory';

const emit = defineEmits(['sendFood'])
const categories = ref([])

const name = ref('');
const price = ref('0');
const imageUrl = ref('');
const description = ref('');
const stars = ref('0');
const preparationMinutes = ref('0');
const categoryFoodId = ref('0');

onMounted(async () => {
    const data = await getFoodCategories();
    categories.value = data;
})

const onSend = async () => {
    const food = {
        name: name.value,
        price: +price.value,
        imageUrl: imageUrl.value,
        description: description.value,
        stars: +stars.value,
        preparationMinutes: +preparationMinutes.value,
        categoryFoodId: +categoryFoodId.value,
        createdAt: new Date()
    }
    const res = await addFood(food);
    if (res) {
        emit('sendFood', food);
    }
    console.log(res);
}
</script>

<style scoped>
</style>