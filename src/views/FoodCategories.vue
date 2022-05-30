
IonBu<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <ion-title>
        <ion-text>
          <h1>Food Categories</h1>
        </ion-text>
      </ion-title>
      <ion-buttons slot="end" @click="addCategoryModal = true">
        <ion-icon class="add" :icon="addOutline"></ion-icon>
      </ion-buttons>
    </ion-toolbar>
    <ion-content>
      <Modal :show="addCategoryModal" @close="addCategoryModal = false">
        <FoodCategoryForm @sendFoodCategory="onAddCategory" />
      </Modal>
      <Modal :show="editCategoryModal" @close="editCategoryModal = false">
        <FoodCategoryForm :categoryEdit="categoryToEdit" :editMode="true" @sendFoodCategory="onEditCategory" />
      </Modal>
      <ul>
        <li v-for="category in foodCategories" :key="category.id">
          <FoodCategoryCard @editFoodCategory="onEditMode(category)" :name="category.name" />
        </li>
      </ul>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  IonTitle,
  IonText,
  IonToolbar,
  IonBackButton,
  IonButtons
} from "@ionic/vue";
import { addOutline } from "ionicons/icons";
import Modal from "../components/Modal.vue";
import FoodCategoryForm from "../components/FoodCategoryForm.vue";
import FoodCategoryCard from "../components/FoodCategoryCard.vue";
import { getFoodCategories } from "../services/foodCategory";

const addCategoryModal = ref(false);
const editCategoryModal = ref(false);
const foodCategories = ref([]);

const categoryToEdit = ref({});

onMounted(async () => {
  const categories = await getFoodCategories();
  foodCategories.value = categories;
});

const onAddCategory = (newCategory) => {
  console.log(newCategory)
  foodCategories.value.push(newCategory);
  addCategoryModal.value = false;
};

const onEditCategory = (newCategory) => {
  console.log(newCategory)
  const { id } = newCategory;
  const index = foodCategories.value.findIndex(
    (category) => category.id === id
  );
  foodCategories.value[index] = newCategory;
  editCategoryModal.value = false;
};

const onEditMode = (category) => {
  categoryToEdit.value = category;
  editCategoryModal.value = true;
};
</script>

<style scoped>
ul {
  list-style: none;
  list-style-position: inside;
  padding-left: 0;
  display: grid;
}

.add {
  font-size: 32px;
  color: #00a680;
}
</style>