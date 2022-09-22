import { ActionTypes } from "../constants/action-types";

export const setLogin = (login) => {
  return {
    type: ActionTypes.SET_LOGIN,
    payload: login,
  };
};

export const setLoginWithGoogle = (loginwithgoogle) => {
  return {
    type: ActionTypes.SET_LOGIN_WITH_GOOGLE,
    payload: loginwithgoogle,
  };
};

export const setRegister = (register) => {
  return {
    type: ActionTypes.SET_REGISTER,
    payload: register,
  };
};



