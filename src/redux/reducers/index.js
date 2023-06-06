import { combineReducers } from "redux";
import posts from "./post";
import settings from "./settings";
export default combineReducers({
  posts,
  settings,
});
