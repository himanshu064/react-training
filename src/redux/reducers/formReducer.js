import { ActionTypes } from "../constants/action-types";

const intialState= {
user:"",
}
export const loginReducer = (state=intialState, {type,payload}) => {
    console.log(payload,'payload');
    switch (type) {
        case ActionTypes.SET_LOGIN:
            return {...state,user:payload}

        case ActionTypes.SET_LOGIN_WITH_GOOGLE:
            return {...state,user:payload}

        case ActionTypes.SET_REGISTER:
            return {...state,user:payload}  

            default:
                return state;
    };
};

