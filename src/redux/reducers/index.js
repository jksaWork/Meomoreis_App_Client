import { combineReducers } from "redux";
import posts from "./post";
import settings from "./settings";
import users from "./usersReducers";
export default combineReducers({
  posts,
  settings,
  users,
});
