import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import { checkSaga } from "./saga";

const SagaMiddlewares = createSagaMiddleware();

const initialState = {};
//const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(SagaMiddlewares)
);
SagaMiddlewares.run(checkSaga);
//SagaMiddlewares.run();

export default store;
