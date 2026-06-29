import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyC1vJp44x3jyRaHBV9X2nasKGhBf75Zsn0",
  authDomain: "snab-innovations.firebaseapp.com",
  projectId: "snab-innovations",
  storageBucket: "snab-innovations.firebasestorage.app",
  messagingSenderId: "484548732985",
  appId: "1:484548732985:web:b0efb6a9fe2b75a83305e8",
  measurementId: "G-VNHQ919KP2"
};

// Initialize Firebase once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);
