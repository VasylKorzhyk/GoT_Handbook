import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import history from "../history";

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
  logger
);

export default initialState => createStore(reducer, initialState, enhancer);
