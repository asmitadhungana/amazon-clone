import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbqksToamk7gg04X1CvzyQyactohrX-J8",
    authDomain: "clone-769e2.firebaseapp.com",
    databaseURL: "https://clone-769e2.firebaseio.com",
    projectId: "clone-769e2",
    storageBucket: "clone-769e2.appspot.com",
    messagingSenderId: "699331205783",
    appId: "1:699331205783:web:9f6317d49c34ce247a67d2",
    measurementId: "G-GWGM7TXFXR"
});

const auth = firebase.auth();

export { auth };