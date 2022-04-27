<template>
    <div class="card">
        <div class="stars">
        </div>
        <ion-button fill="clear" class="favorite" @click="switchFavorite">
            <ion-icon v-if="!isFavorite" :icon="heartCircleOutline"></ion-icon>
            <ion-icon v-else :icon="heartDislikeCircleOutline"></ion-icon>
        </ion-button>
        <picture>
            <span class="black-opacity"></span>
            <img class="blur" :src="imgSrc" :alt="imgAlt">
        </picture>
    </div>
</template>

<script setup>
import {
    IonButton,
    IonIcon
} from '@ionic/vue';

import {
    heartCircleOutline,
    heartDislikeCircleOutline,
    star,
    starHalf
} from 'ionicons/icons';

import { ref } from 'vue'
const props = defineProps({
    imgSrc: String,
    imgAlt: String,
    stars: Number,
    price: Number,
    name: String,
    timeToCook: Number,
})
const isFavorite = ref(false)

const switchFavorite = () => isFavorite.value = !isFavorite.value
</script>

<style scoped>
.favorite {
    font-size: 1.75rem;
    color: #FE251B;
    position: absolute;
    bottom: 1;
    right: 0;
    z-index: 20;
    margin: 10px 10px 0 0;
    --padding-start: 0;
    --padding-end: 0;
}

.blur {
    filter: blur(0.1rem);
}

.black-opacity {
    background-color: #000;
    opacity: 0.25;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
}
</style>