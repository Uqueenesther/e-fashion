// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAA8uJlUI58g34yHUjcklSW-lhZhypXLdg",
  authDomain: "e-fashion-3bb6a.firebaseapp.com",
  projectId: "e-fashion-3bb6a",
  storageBucket: "e-fashion-3bb6a.appspot.com",
  messagingSenderId: "272212705942",
  appId: "1:272212705942:web:e36cdeb00477b9d2ce38b7"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>signInWithRedirect(auth, provider)


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
   const userDocRef = doc(db, 'users', userAuth.uid);

   const userSnapshot = await getDoc(userDocRef);
   console.log(userSnapshot);
   console.log(userSnapshot.exists());

   if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });
    } catch (error) {
      console.log('error creating user', error.message)
    }
   }

   return userDocRef;
};