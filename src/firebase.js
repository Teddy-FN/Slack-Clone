import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDC2hBcx1bh4xBv8vO9c2MoLGsf2MaMlTo",
    authDomain: "slack-clone-challenge-4ff32.firebaseapp.com",
    projectId: "slack-clone-challenge-4ff32",
    storageBucket: "slack-clone-challenge-4ff32.appspot.com",
    messagingSenderId: "8247813419",
    appId: "1:8247813419:web:201e925edc788c84c0d16e"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();



export default db;