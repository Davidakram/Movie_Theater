import { createStoreHook } from "react-redux"
import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk";
import MovieReducer from "./Reducers/Reducers";



const mystore=createStore(MovieReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default mystore