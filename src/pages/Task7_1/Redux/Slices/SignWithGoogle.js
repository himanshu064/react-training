import { createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase";
const initialState={
}
let GoogleSlice=createSlice({
    name:"Google_login",
    initialState:initialState,
    reducers:{
        HandleGoogleLogin:(state)=>{
            const googleProvider = new GoogleAuthProvider();
            signInWithPopup(auth,googleProvider).then((res)=>{
                window.alert(`login succesfully welcome ${res.user.email}`);
                window.location="/task7Redux/welcome"
            }).catch(error=>{
                console.log(error)
            })

        }
    }
})
export const { HandleGoogleLogin } = GoogleSlice.actions;
export default GoogleSlice.reducer;
