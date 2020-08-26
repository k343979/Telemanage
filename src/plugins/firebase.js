import Vue from 'vue'
import { firestorePlugin } from "vuefire";
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(firestorePlugin);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGtoL4CeRuOo_DqgHa2fcFB9w3UZSAbW8",
  authDomain: "chat-firestore-vue-sampl-86d13.firebaseapp.com",
  databaseURL: "https://chat-firestore-vue-sampl-86d13.firebaseio.com",
  projectId: "chat-firestore-vue-sampl-86d13",
  storageBucket: "chat-firestore-vue-sampl-86d13.appspot.com",
  messagingSenderId: "37928584864"
});

export const db = firebaseApp.firestore();