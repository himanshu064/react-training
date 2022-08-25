import LoginReducer from "./Slices/LoginSlice";
import GoogleReducer from "./Slices/SignWithGoogle"
const rootReducer = {
  loginInfo: LoginReducer,
  GoogleSign:GoogleReducer

};
export default rootReducer;
