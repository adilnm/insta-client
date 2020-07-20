import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions";

class Logout extends React.Component {
  componentDidMount() {
    this.props.logout();
    this.props.history.push("signin");
  }

  render() {
    return <div></div>;
  }
}

export default connect(null, { logout })(Logout);
