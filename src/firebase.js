import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWovzUfpt93IDCM939QyaU4EaLm-fdXYs",
  authDomain: "new-chat-box.firebaseapp.com",
  projectId: "new-chat-box",
  storageBucket: "new-chat-box.appspot.com",
  messagingSenderId: "713218858660",
  appId: "1:713218858660:web:0cd9e050f7066757cb9031",
  measurementId: "G-5N7HGEQQY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
