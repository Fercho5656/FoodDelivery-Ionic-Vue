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
                        <h1>Restaurant Categories</h1>
                    </ion-text>
                </ion-title>
                <ion-button slot="end" fill="clear" @click="addCategoryModal = true">
                    <ion-icon class="add" :icon="addOutline"></ion-icon>
                </ion-button>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ul>
                <li v-for="category in restaurantCategories" :key="category.id">
                    <RestaurantCategory :category="category" @edit="editMode" @delete="onDelete" />
                </li>
            </ul>
        </ion-content>
        <Modal :show="addCategoryModal" @close="addCategoryModal = false">
            <RestaurantCategoryForm @send="onAdd" />
        </Modal>
        <Modal :show="editCategoryModal" @close="editCategoryModal = false">
            <RestaurantCategoryForm :edit-mode="true" :category-to-edit="categoryToEdit" @send="onEdit" />
        </Modal>
    </ion-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonBackButton, IonText, IonTitle, IonIcon, IonButton, IonButtons, IonContent, toastController } from '@ionic/vue'
import { addOutline } from 'ionicons/icons'
import { addRestaurantCategory, getRestaurantCategories, deleteRestaurantCategory, updateRestaurantCategory } from '../services/restaurantCategories';
import RestaurantCategory from '../components/RestaurantCategory.vue';
import RestaurantCategoryForm from '../components/RestaurantCategoryForm.vue';
import Modal from '../components/Modal.vue';

const restaurantCategories = ref([]);

const addCategoryModal = ref(false);
const editCategoryModal = ref(false);

const categoryToEdit = ref(null)

const editMode = (category) => {
    categoryToEdit.value = category;
    editCategoryModal.value = true;
}

const onAdd = async (category) => {
    const createdToast = await toastController.create({
        message: 'Category added',
        duration: 2000,
        color: 'success'
    });
    const creatingToast = await toastController.create({
        message: 'Creating category...',
        duration: 2000,
        color: 'warning'
    });
    creatingToast.present();
    const res = await addRestaurantCategory({ name: category });
    if (res) {
        restaurantCategories.value.push(res);
        createdToast.present();
        addCategoryModal.value = false;
    }
}

const onDelete = async (id) => {
    const deletingToast = await toastController.create({
        message: 'Deleting category...',
        duration: 2000,
        color: 'warning'
    });
    const deletedToast = await toastController.create({
        message: 'Category deleted',
        duration: 2000,
        color: 'success'
    });
    deletingToast.present();
    const res = await deleteRestaurantCategory(id);
    if (res) {
        deletedToast.present()
        restaurantCategories.value = restaurantCategories.value.filter(category => category.id !== id);
    }
}

const onEdit = async (newCategory) => {
    const { id } = categoryToEdit.value
    const updatingToast = await toastController.create({
        message: 'Updating category...',
        duration: 2000,
        color: 'warning'
    });
    const updatedToast = await toastController.create({
        message: 'Category updated!',
        duration: 2000,
        color: 'success'
    });
    updatingToast.present();
    const res = await updateRestaurantCategory(id, newCategory);
    if (res.status === 204) {
        const index = restaurantCategories.value.findIndex(category => category.id === id);
        restaurantCategories.value[index] = { id, name: newCategory };
        updatedToast.present();
        editCategoryModal.value = false;
    }
}

onMounted(async () => {
    restaurantCategories.value = await getRestaurantCategories();
})
</script>

<style scoped>
h1 {
    font-size: 1.2rem;
    font-weight: bold;
}

.add {
    font-size: 32px;
    color: #00a680;
}

ul {
    list-style: none;
    padding: 0;
}
</style>