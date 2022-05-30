<template>
    <h2 v-if="!editMode">Add Restaurant</h2>
    <h2 v-else>Edit Restaurant</h2>
    <form @submit.prevent="onSend">
        <Input placeholder="Name" v-model="name" />
        <Input placeholder="Address" v-model="address" />
        <Input placeholder="Phone" v-model="phone" />
        <ion-item>
            <ion-label>Category</ion-label>
            <ion-select v-model="categoryRestaurantId">
                <ion-select-option selected disabled>Select One Category</ion-select-option>
                <template v-for="category in categories">
                    <ion-select-option :value="category.id">{{ category.name }}</ion-select-option>
                </template>
            </ion-select>
        </ion-item>
        <ion-button v-if="!editMode" type="submit">Add Restaurant</ion-button>
        <ion-button v-else type="submit">Edit Restaurant</ion-button>
    </form>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { IonButton, IonSelect, IonSelectOption, IonItem, IonLabel } from '@ionic/vue'
import Input from '../components/Input.vue'

const props = defineProps({
    categories: {
        type: Array,
        required: true
    },
    editMode: {
        type: Boolean,
        default: false
    },
    restaurant: {
        type: Object,
        default: null
    }
})
const emits = defineEmits(['send'])

const name = ref('')
const address = ref('')
const phone = ref('')
const categoryRestaurantId = ref()

const onSend = () => {
    const restaurant = {
        name: name.value,
        address: address.value,
        phone: phone.value,
        categoryRestaurantId: categoryRestaurantId.value
    }
    emits('send', restaurant)
}

onMounted(() => {
    if (props.editMode) {
        name.value = props.restaurant.name
        address.value = props.restaurant.address
        phone.value = props.restaurant.phone
        categoryRestaurantId.value = props.restaurant.categoryRestaurant.id
    }
})
</script>

<style scoped>
h2 {
    color: #fff;
}
</style>