import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyDe6e4gWhi6Eu14XIG0NAh40x6tUpZ5quU",
    authDomain: "crwn-db-53be1.firebaseapp.com",
    projectId: "crwn-db-53be1",
    storageBucket: "crwn-db-53be1.appspot.com",
    messagingSenderId: "75590930661",
    appId: "1:75590930661:web:208f60c99302b13cdc840c",
    measurementId: "G-JLYBT0HJ9R"
    
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`)
     const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
 
        } catch (error) {
            console.log('error creating user')

        }
    }
   
    return userRef;
}

firebase.initializeApp(config);


export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

