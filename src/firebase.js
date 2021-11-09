import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAj42Vque-ORSBph19G6p6wji64c9MbR7E",
    authDomain: "michat-5509c.firebaseapp.com",
    projectId: "michat-5509c",
    storageBucket: "michat-5509c.appspot.com",
    messagingSenderId: "172697767165",
    appId: "1:172697767165:web:5ae9f29fda0e83eeb00294",
    measurementId: "G-Y4Q8RXPPTK"
}) 

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }