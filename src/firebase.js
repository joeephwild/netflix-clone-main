// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD6louxd4sHjYOG2S39l7U5Du-wJzCvaOs',
  authDomain: 'netflix-redesign-b150a.firebaseapp.com',
  projectId: 'netflix-redesign-b150a',
  storageBucket: 'netflix-redesign-b150a.appspot.com',
  messagingSenderId: '44592484596',
  appId: '1:44592484596:web:5002203735f0442c740ea1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
