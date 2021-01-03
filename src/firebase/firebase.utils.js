import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const Config={
    
        apiKey: "AIzaSyC0vPbJ0VFbWw7-jFrEeYqxL82AFAqGec0",
        authDomain: "crwn-db-f3c62.firebaseapp.com",
        projectId: "crwn-db-f3c62",
        storageBucket: "crwn-db-f3c62.appspot.com",
        messagingSenderId: "302637798263",
        appId: "1:302637798263:web:a1644faf8f5a05db0cc772",
        measurementId: "G-YFRSJVH77S"
      };

firebase.initializeApp(Config);

export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle= () =>auth.signInWithPopup(provider);

export default firebase;