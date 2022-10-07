// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwlBKWja7JeVdlAFH7RAGbeJDLkfOlCI8",
  authDomain: "newurlshortner-fb098.firebaseapp.com",
  projectId: "newurlshortner-fb098",
  storageBucket: "newurlshortner-fb098.appspot.com",
  messagingSenderId: "495363860029",
  appId: "1:495363860029:web:79a057fca2d9df9126ac54",
  measurementId: "G-5GQNPVG0W9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
export { auth, db, storage };

console.log({ auth, db, storage });

export default firebaseConfig;
