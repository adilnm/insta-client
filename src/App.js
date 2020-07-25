import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import createPost from "./components/CreatePost";
import { currentUser } from "./actions";
import { connect } from "react-redux";
import Logout from "./components/Logout";
import UserProfile from "./components/UserProfile";
import FollowedPosts from "./components/FollowedPosts";

class App extends React.Component {
  componentDidMount() {
    this.props.currentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/create" component={createPost} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/profile/:userid" component={UserProfile} />
          <Route exact path="/followedposts" component={FollowedPosts} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { currentUser })(App);
