import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9QgaKldI2mqv-JR63uYmJ1VcD_KcGTCc",
  authDomain: "react-hook-blog-e27aa.firebaseapp.com",
  projectId: "react-hook-blog-e27aa",
  storageBucket: "react-hook-blog-e27aa.appspot.com",
  messagingSenderId: "57215294512",
  appId: "1:57215294512:web:f8f6274169b279444da1f5",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
