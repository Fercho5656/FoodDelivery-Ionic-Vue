<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>
                <slot name="title"></slot>
            </ion-card-title>
            <slot></slot>
        </ion-card-header>
    </ion-card>
</template>

<script>
export default {
    name: "LinkCard"
}
</script>
<script setup>
import {
    IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/vue'
</script>

<style scoped>
ion-card {
    min-width: 150px;
    min-height: 150px;
}
</style>