import RootReducer from "./reducer/rootReducer"
import { createStore } from "redux"

const Redux_Store = createStore(RootReducer)

export default Redux_Store;