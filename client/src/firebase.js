import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "language-travel-planner-eafbc.firebaseapp.com",
    projectId: "language-travel-planner-eafbc",
    storageBucket: "language-travel-planner-eafbc.firebasestorage.app",
    messagingSenderId: "927868435078",
    appId: "1:927868435078:web:419ae51a8acbb885b86f07"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
