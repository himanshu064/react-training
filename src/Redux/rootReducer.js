import LoginReducer from "./Slices/LoginSlice";
import GoogleReducer from "./Slices/SignWithGoogle";
import RegisterReducer from "./Slices/RegisterSlice";
const rootReducer = {
  loginInfo: LoginReducer,
  GoogleSign: GoogleReducer,
  Register: RegisterReducer,
};
export default rootReducer;
