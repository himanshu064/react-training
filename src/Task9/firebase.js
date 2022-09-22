// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Z4rhkkmWLtSrSy1qGoScyqP6CnwGcxE",
  authDomain: "cahtapp-79a67.firebaseapp.com",
  projectId: "cahtapp-79a67",
  storageBucket: "cahtapp-79a67.appspot.com",
  messagingSenderId: "18787847559",
  appId: "1:18787847559:web:31eb201ef83c8f247d1722",
  databaseURL:"http://cahtapp-79a67.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
