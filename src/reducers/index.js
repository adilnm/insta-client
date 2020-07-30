import signup from "./signup";
import { combineReducers } from "redux";
import currentUser from "./currentUser";
import allPosts from "./allPosts";
import myPosts from "./myPosts";
import otherUserProfiles from "./otherUserProfiles";
import followedPosts from "./followedposts";

export default combineReducers({
  auth: signup,
  // myPosts: createPost,
  user: currentUser,
  posts: allPosts,
  myPosts,
  otherProfile: otherUserProfiles,
  followedPosts
});
