import signup from "./signup";
import { combineReducers } from "redux";
import createPost from "./createPost";
import  currentUser from "./currentUser";
import allPosts from "./allPosts";

export default combineReducers({
  auth:signup,
  myPosts:createPost,
  user:currentUser,
  posts:allPosts
});
