import { createStore } from "redux";
import RootReducer from "./reducers/Rootreducer";

const Redux_Store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Redux_Store;
