import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe-M2AaAo_Sb5Dj3D_Bb0h_Om2LK0PcHk",
  authDomain: "chatone-5131f.firebaseapp.com",
  projectId: "chatone-5131f",
  storageBucket: "chatone-5131f.appspot.com",
  messagingSenderId: "25472356739",
  appId: "1:25472356739:web:7394f8c222c9f8b93366b6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
