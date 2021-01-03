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

export const createUserProfileDocument= async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`);

    const snapShot= await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createDate= new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createDate,
                ...additionalData
            })

        }catch(err){
            
        }
    }
    return userRef;
}

firebase.initializeApp(Config);


export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle= () =>auth.signInWithPopup(provider);

export default firebase;