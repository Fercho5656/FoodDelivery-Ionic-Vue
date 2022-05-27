<template>
    <div class="card">
        <div class="stars">
            <template v-for="i in stars">
                <ion-icon :icon="star"></ion-icon>
            </template>
        </div>
        <ion-button fill="clear" class="favorite" @click="switchFavorite">
            <ion-icon v-if="!isFavorite" :icon="heartCircleOutline"></ion-icon>
            <ion-icon v-else :icon="heartDislikeCircleOutline"></ion-icon>
        </ion-button>
        <div class="time-to-cook">
            <ion-icon :icon="timer"></ion-icon>
            <ion-text>{{ timeToCook }} min</ion-text>
        </div>
        <div class="details">
            <ion-text class="name">{{ name }}&nbsp;</ion-text>
            <ion-text class="price">${{ price }}</ion-text>
        </div>
        <picture>
            <span class="black-opacity"></span>
            <img class="blur" :src="imgSrc" :alt="imgAlt">
        </picture>
    </div>
</template>

<script setup>
import {
    IonButton,
    IonIcon,
    IonText
} from '@ionic/vue';

import {
    heartCircleOutline,
    heartDislikeCircleOutline,
    star,
    starHalf,
    timer
} from 'ionicons/icons';

import { ref } from 'vue'
const props = defineProps({
    imgSrc: {
        type: String,
        default: "https://i.imgur.com/JM4zJ5V.jpeg"
    },
    imgAlt: {
        type: String,
        default: 'Image Alt'
    },
    stars: {
        type: Number,
        default: 5
    },
    price: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        default: 'Food Name'
    },
    timeToCook: {
        type: Number,
        default: 0
    },
})
const isFavorite = ref(false)

const switchFavorite = () => isFavorite.value = !isFavorite.value
</script>

<style scoped>
ion-icon {
    font-size: 2.5rem;
}

ion-text {
    color: #fff;
    font-size: 1.25rem;
}

.card {
    position: relative;
}

.card>*:not(:last-child) {
    position: absolute;
    margin: 15px;
    z-index: 20;
}

.stars {
    max-width: 16ch;
    text-align: left;
    color: #ffd700;
    top: 0;
    left: 0;
}

.stars ion-icon {
    font-size: 1.75rem;
}

.favorite {
    top: 0;
    right: 0;
    --padding-start: 0;
    --padding-end: 0;
}

.time-to-cook {
    color: #f4c20d;
    bottom: 0;
    left: 0;
}

.time-to-cook>ion-text {
    font-size: 1rem;
}

.details {
    bottom: 0;
    right: 0;
    left: 0;
}

.details>ion-text {
    font-size: 1.75rem;
    font-weight: 700;
}


.favorite {
    color: #FE251B;
    margin: 10px;
}

.time-to-cook {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    color: #fff;
}

picture>img {
    position: relative;
    object-fit: cover;
    width: 100%;
    max-height: 200px;
}

.blur {
    filter: blur(0.15rem);
}

.black-opacity {
    background-color: #000;
    opacity: 0.35;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
}
</style>