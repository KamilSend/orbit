import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHhz8fKz5VRBR55hZQYYtFveANF1D6Ois",
    authDomain: "efaktury-d30eb.firebaseapp.com",
    projectId: "efaktury-d30eb",
    storageBucket: "efaktury-d30eb.appspot.com",
    messagingSenderId: "375759883931",
    appId: "1:375759883931:web:ec64af320b79def00c403e",
    measurementId: "G-XM6J8J8K2J"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
// export const db = firebase.database();

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();