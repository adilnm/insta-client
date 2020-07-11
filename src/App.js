import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import createPost from "./components/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/create" component={createPost} />
      </div>
    </BrowserRouter>
  );
}

export default App;
