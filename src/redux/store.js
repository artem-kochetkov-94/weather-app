import { createStore, applyMiddleware } from "redux";
import rootReducer from "./index";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, reduxLogger)
);

export default store;
