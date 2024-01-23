// Import the functions you need from the SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4YROsd5wlCysW4BhDn9PMcI_Bux0zN-o",
  authDomain: "votehub-e185d.firebaseapp.com",
  projectId: "votehub-e185d",
  storageBucket: "votehub-e185d.appspot.com",
  messagingSenderId: "367275630304",
  appId: "1:367275630304:web:4ab6543e2c20dbc1087a85"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db, firebaseApp };