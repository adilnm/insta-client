import signup from "./signup";
import { combineReducers } from "redux";
import createPost from "./createPost";
import currentUser from "./currentUser";
import allPosts from "./allPosts";
import myPosts from "./myPosts";
import otherUserProfiles from "./otherUserProfiles";

export default combineReducers({
  auth: signup,
  // myPosts: createPost,
  user: currentUser,
  posts: allPosts,
  myPosts,
  otherProfile: otherUserProfiles
});
