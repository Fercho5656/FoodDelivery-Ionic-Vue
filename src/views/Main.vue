<template>
    <ion-page>
        <ion-content>
            <h1>Main Page</h1>
            <ul>
                <li v-for="view in views">
                    <LinkCard @click="redirect(view.path)">
                        <template v-slot:title>
                            <h2>{{ view.name }}</h2>
                        </template>
                        <ion-icon :icon="view.icon"></ion-icon>
                    </LinkCard>
                </li>
            </ul>
        </ion-content>
    </ion-page>
</template>

<script setup>
import {
    IonPage,
    IonContent,
    IonIcon,
    useIonRouter
} from '@ionic/vue'

import { pizzaOutline, appsOutline, restaurantOutline } from 'ionicons/icons'

import LinkCard from '../components/LinkCard.vue';
import { ref } from 'vue'

const views = ref([
    {
        name: 'Food',
        path: '/food',
        icon: pizzaOutline
    },
    {
        name: 'Food Category',
        path: '/food/categories',
        icon: appsOutline
    },
    {
        name: 'Restaurant',
        path: '/restaurant',
        icon: restaurantOutline
    },
    {
        name: 'Restaurant Category',
        path: '/restaurant/categories',
        icon: appsOutline
    }
]);
const router = useIonRouter()
const redirect = (path) => {
    router.push(path);
};
</script>

<style scoped>
ul {
    list-style: none;
    list-style-position: inside;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

h2 {
    text-transform: capitalize;
}

ion-icon {
    font-size: 32px;
}
</style>