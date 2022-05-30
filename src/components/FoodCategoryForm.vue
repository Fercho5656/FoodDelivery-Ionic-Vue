<template>
  <h2 v-if="!editMode">Add Category</h2>
  <h2 v-else>Edit Category</h2>
  <form @submit.prevent="onSend">
    <Input placeholder="Name" v-model="categoryName" />
    <ion-button v-if="!editMode" type="submit">Add Category</ion-button>
    <ion-button v-else type="submit">Edit Category</ion-button>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { IonButton, toastController } from "@ionic/vue";
import { addFoodCategory, editFoodCategory } from "../services/foodCategory";
import Input from "./Input.vue";

const props = defineProps({
  categoryEdit: {
    type: Object,
    default: null,
  },
  editMode: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["sendFoodCategory"]);

const categoryName = ref("");

const onSend = async () => {
  const newCategory = { name: categoryName.value };
  const { id } = props.editMode ? props.categoryEdit : 0;
  const res = props.editMode
    ? await editFoodCategory(id, newCategory)
    : await addFoodCategory(newCategory);
    console.log(res)
  if (res) {
    const toaster = await toastController.create({
      message: `Category ${props.editMode ? "edited" : "added"} successfully`,
      duration: 2000,
    });
    toaster.present();
    emit("sendFoodCategory", { id, ...newCategory });
  }
};

onMounted(() => {
  if (props.editMode) {
    categoryName.value = props.categoryEdit.name;
  }
});
</script>

<style scoped>
</style>