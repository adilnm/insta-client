import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
