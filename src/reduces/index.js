import { combineReducers } from "redux";
import tweets from "./tweets";
import users from "./users";
import authedUser from "./authedUser";

export default combineReducers({
  tweets,
  users,
  authedUser,
});
