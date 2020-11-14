import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCg3inOJZpmRmN25eluD_g2QmrI1Okn7Dc",
    authDomain: "ecomm-web-910.firebaseapp.com",
    databaseURL: "https://ecomm-web-910.firebaseio.com",
    projectId: "ecomm-web-910",
    storageBucket: "ecomm-web-910.appspot.com",
    messagingSenderId: "924114505344",
    appId: "1:924114505344:web:36170109c23b67d54d2065",
    measurementId: "G-E6LEWSVGFE"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;