import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./index";
import reduxLogger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

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

sagaMiddleware.run(rootSaga);

export default store;
