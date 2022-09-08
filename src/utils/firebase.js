import * as firebase from "firebase";
import Firebase from "@react-native-firebase/app";

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMXL95dVTbPFXi9UgrqT9trWaAIQAmlfU",
    authDomain: "self-taught-programmer.firebaseapp.com",
    projectId: "self-taught-programmer",
    storageBucket: "self-taught-programmer.appspot.com",
    messagingSenderId: "172805826935",
    appId: "1:172805826935:web:4bb727d5403be8aac2d972",
    measurementId: "G-L4K2LE26Z1"
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore;

export { db, auth, firestore };