import { combineReducers } from "redux";
import MyChatData from "./reducer1";
import CheckUser from "./usercheck";

const RootReducer = combineReducers({ MyChatData, CheckUser });

export default RootReducer;
