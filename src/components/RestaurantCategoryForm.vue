<template>
    <h2 v-if="!editMode">Add Category</h2>
    <h2 v-else>Edit Category</h2>
    <form @submit.prevent="emits('send', name)">
        <Input placeholder="Name" v-model="name" />
        <ion-button v-if="!editMode" type="submit">Add Category</ion-button>
        <ion-button v-else type="submit">Add Category</ion-button>
    </form>
</template>

<script setup>
import { IonButton } from '@ionic/vue'
import { onMounted, ref } from 'vue'
import Input from '../components/Input.vue';

const props = defineProps({
    categoryToEdit: {
        type: Object,
        default: null
    },
    editMode: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['send'])

const name = ref('');

onMounted(() => {
    if (props.editMode) {
        name.value = props.categoryToEdit.name;
    }
})
</script>

<style scoped>
h2 {
    color: #fff;
}
</style>