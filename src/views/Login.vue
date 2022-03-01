<template>
    <ion-header>
        <ion-text color="dark">
            <h1>
                Good Food for
                <br />Good Moments
            </h1>
        </ion-text>
    </ion-header>
    <ion-card>
        <ion-card-header></ion-card-header>
        <ion-card-content>
            <form>
                <ion-item>
                    <ion-label position="floating">
                        <ion-icon :icon="personCircleOutline" size="small"></ion-icon>Username
                    </ion-label>
                    <ion-input v-model="username" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">
                        <ion-icon :icon="lockClosedOutline" size="small"></ion-icon>Password
                    </ion-label>
                    <ion-input type="password" v-model="password" required></ion-input>
                </ion-item>
                <ion-row class="ion-justify-content-center">
                    <ion-item>
                        <ion-button fill="clear" router-link href="/login">
                            <ion-text>Forgot password?</ion-text>
                        </ion-button>
                        <ion-button size="default">Login</ion-button>
                    </ion-item>
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-item>
                        <ion-button fill="clear" router-link href="/register">
                            <ion-text>Don't have an account? Sign up</ion-text>
                        </ion-button>
                    </ion-item>
                </ion-row>
            </form>
        </ion-card-content>
    </ion-card>
    <ion-footer>
        <ion-toolbar>
            <ion-row class="ion-justify-content-evenly">
                <ion-icon size="large" :icon="logoWhatsapp"></ion-icon>
                <ion-icon size="large" :icon="logoFacebook"></ion-icon>
                <ion-icon size="large" :icon="logoInstagram"></ion-icon>
            </ion-row>
        </ion-toolbar>
    </ion-footer>
</template>

<script setup>
import { personCircleOutline, lockClosedOutline, logoWhatsapp, logoFacebook, logoInstagram } from "ionicons/icons";
</script>

<style scoped>
h1 {
    line-height: 1.5em;
}
</style>