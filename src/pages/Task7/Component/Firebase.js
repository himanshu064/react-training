import firebaseConfig from "./Config/FirebaseConfig";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const FireBaseApp = initializeApp(firebaseConfig);
const auth = getAuth(FireBaseApp);
const db = getFirestore(FireBaseApp);
export { auth, db };
