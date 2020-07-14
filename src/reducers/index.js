import signup from "./signup";
import { combineReducers } from "redux";
import createPost from "./createPost";

export default combineReducers({
  user:signup,
  myPosts:createPost
});
