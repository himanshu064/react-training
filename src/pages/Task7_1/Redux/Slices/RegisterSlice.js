import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from "../../Firebase"
import { addDoc,collection } from "firebase/firestore";
const initialState={
newUser:null
}
let RegisterSlice=createSlice({
    name:"Register",
    initialState:initialState,
    reducers:{
        register:async(state,actions)=>{
            state.newUser=actions.payload;
            if(!state.newUser.Email || !state.newUser.Password){
                alert("Please fill out filed")
            }
            try{
const result=await createUserWithEmailAndPassword(auth,state.newUser.Email,state.newUser.Password)
alert(result.user.email)
await addDoc(collection(db,"ReduxUser"),{
Email:state.newUser.Email,
Password:state.newUser.Password
})
window.location="/task7Redux/welcome"
}
            catch (error) {
                window.alert(error.message);
              }
            
        }
    }
})
export const {register}=RegisterSlice.actions;
export default RegisterSlice.reducer