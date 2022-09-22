import { combineReducers } from "redux";
import {loginReducer} from "./formReducer";
const reducers = combineReducers({
  login:loginReducer,
});
export default reducers;