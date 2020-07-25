import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  renderList = () => {
    if (this.props.user) {
      return [
        <li>
          <Link to="/profile">Profile</Link>
        </li>,
        <li>
          <Link to="/create">Create Post</Link>
        </li>,
        <li>
          <Link to="/followedposts">My Following Posts</Link>
        </li>,
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      ];
    } else {
      return [
        <li>
          <Link to="/signin">Login</Link>
        </li>,
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      ];
    }
  };
  render() {
    return (
      <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo left">
            Instagram
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderList()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mstp = ({ user }) => {
  return { user };
};

export default connect(mstp)(Navbar);
