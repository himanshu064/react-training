import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, Timestamp } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// export const setLogin = (login) =>{
//     return {
//         type:ActionTypes.SET_LOGIN,
//         payload:login,
//     };
// };

export const setLogin = (email,password ,onSucess,onFailure)=>async(dispatch)=>{
  try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setLogin(result))
      console.log(result,'result');
      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      if (onSucess){
          onSucess()
      }
    } catch (err) {
      if(onFailure){
          onFailure(err)
      }
    }
  };

export const setRegister = (email,password,name,onSuccess,onFailure) =>async(dispatch)=>{
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await setDoc(doc(db, "users", result.user.uid), {
      uid: result.user.uid,
      name,
      email,
      createdAt: Timestamp.fromDate(new Date()),
      isOnline: true,
    });
    if(onSuccess){
      onSuccess()
    }
    <Navigate to='/' />;
  } catch (err) {
    if (onFailure){
      onFailure()
    }
  }
};

const googleProvider = new GoogleAuthProvider()
export const setLoginWithGoggle = (onFailure) =>async(dispatch)=>{
  signInWithPopup(auth, googleProvider).then(res => {
    window.alert("Log In With Google Successfully");
    <Navigate to="/" />;
    })
    .catch((error) => {
   if (onFailure){
    onFailure()
   }
    });
    return;
};
