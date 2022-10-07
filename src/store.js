import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { registerReducer } from "./reducers/registerReducer";

const rootReducer = combineReducers({
  registerReducer: registerReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
