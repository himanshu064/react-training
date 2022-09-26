import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
const initialState = {
  user: null,
};
let LoginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    handleSubmit: async (state, actions) => {
      state.user = actions.payload;
      if (!state.user.Email || !state.user.Password) {
        alert("Please fill out the filed");
      }
      try {
        const result = await signInWithEmailAndPassword(
          auth,
          state.user.Email,
          state.user.Password
        );
        alert(`login successfully ${result.user.email}`);
        window.location = "/task7Redux/welcome";
      } catch (error) {
        alert(error);
      }
    },
  },
});
export const { handleSubmit } = LoginSlice.actions;
export default LoginSlice.reducer;
