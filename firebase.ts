import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPpOhZFcQ9YBHsrPW9SIVRETAv-ErLYqc",
  authDomain: "alvs-chatgpt.firebaseapp.com",
  projectId: "alvs-chatgpt",
  storageBucket: "alvs-chatgpt.appspot.com",
  messagingSenderId: "1098094155986",
  appId: "1:1098094155986:web:82f85d28566cb6669ff50b",
  measurementId: "G-JC1T3YNVC7",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
