<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>
                <h2>{{ restaurant.name }}</h2>
            </ion-card-title>
        </ion-card-header>
        <ion-card-content class="content">
            <ion-button @click="emits('edit')" class="icon edit" fill="clear">
                <ion-icon :icon="createOutline"></ion-icon>
            </ion-button>
            <div class="data">
                <ion-text>
                    <p>{{ restaurant.address }}</p>
                </ion-text>
                <ion-text>
                    <p>{{ restaurant.phone }}</p>
                </ion-text>
            </div>
            <ion-button @click="emits('delete')" class="icon delete" fill="clear">
                <ion-icon :icon="trashBinOutline"></ion-icon>
            </ion-button>
        </ion-card-content>
    </ion-card>
</template>

<script setup>
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonItem, IonText, IonButton, IonIcon } from '@ionic/vue'
import { createOutline, trashBinOutline } from 'ionicons/icons'
const props = defineProps({
    restaurant: {
        type: Object,
        required: true
    }
})
const emits = defineEmits(['edit', 'delete'])
</script>

<style scoped>
.content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 16px
}

.data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.icon {
    font-size: 32px;
}

.edit {
    color: #FFA500;
}

.delete {
    color: #f53d3d;
}

p {
    font-size: 16px;
}
</style>