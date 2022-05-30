<template>
    <ion-card>
        <ion-card-content class="wrapper">
            <ion-text class="text">
                {{ category.name }}
            </ion-text>
            <ion-item-group>
                <ion-button @click="emits('edit', category)" fill="clear">
                    <ion-icon class="icon edit" :icon="createOutline"></ion-icon>
                </ion-button>
                <ion-button @click="emits('delete', category.id)" fill="clear">
                    <ion-icon class="icon delete" :icon="trashBinOutline"></ion-icon>
                </ion-button>
            </ion-item-group>
        </ion-card-content>
    </ion-card>
</template>

<script setup>
import { IonCard, IonCardContent, IonText, IonButton, IonIcon, IonItemGroup } from '@ionic/vue'
import { trashBinOutline, createOutline } from 'ionicons/icons'
const props = defineProps({
    category: {
        type: Object,
        required: true
    }
})
const emits = defineEmits(['edit', 'delete'])
</script>
<style scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    color: #fff;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
}

.icon {
    font-size: 32px;
}

.edit {
    color: #FFA500;
}

.delete {
    color: #FF0000;
}
</style>