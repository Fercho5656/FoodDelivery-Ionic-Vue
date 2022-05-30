<template>
  <ion-page>
    <ion-toolbar>
      <ion-button slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-button>
      <ion-button slot="end" @click="addCategoryModal = true">
        <ion-icon :icon="addOutline"></ion-icon>
      </ion-button>
    </ion-toolbar>
    <ion-content>
      <Modal :show="addCategoryModal" @close="addCategoryModal = false">
        <FoodCategoryForm @sendFoodCategory="onAddCategory" />
      </Modal>
      <Modal :show="editCategoryModal" @close="editCategoryModal = false">
        <FoodCategoryForm
          :categoryEdit="categoryToEdit"
          :editMode="true"
          @sendFoodCategory="onEditCategory"
        />
      </Modal>
      <h2>Food Categories</h2>
      <ul>
        <li v-for="category in foodCategories" :key="category.id">
          <FoodCategoryCard
            @editFoodCategory="onEditMode(category)"
            :name="category.name"
          />
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
  IonToolbar,
  IonBackButton,
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
</style>