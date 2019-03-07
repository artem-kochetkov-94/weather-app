import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

const middlewares = [reduxThunk];

if (isDev) middlewares.push(reduxLogger);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = isDev
  ? createStore(rootReducer, enhancer)
  : createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
