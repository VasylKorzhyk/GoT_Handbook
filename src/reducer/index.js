import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import houses from "./houses";
import people from "./people";
import history from "../history";

export default combineReducers({
  houses,
  people,
  router: connectRouter(history)
});
