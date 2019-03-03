import { createStore, applyMiddleware } from "redux";
import rootReducer from "./index";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

const middlewares = [reduxThunk];

if (isDev) middlewares.push(reduxLogger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
