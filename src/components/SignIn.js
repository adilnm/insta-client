import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signin } from "../actions";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signin(this.state);
  };

  render() {
    let errorClass = "";
    if (this.props.user.error) {
      errorClass = "alert alert-danger";
    }
    return (
      <div className="myCard">
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <div className={errorClass} role="alert">
            {this.props.user.error}
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="btn waves-effect waves-light #64b5f6 blue darken-1"
            >
              Login
            </button>
          </form>
          <h5>
            <Link to="/signup">Create an account</Link>
          </h5>
        </div>
      </div>
    );
  }
}

const mstp = state => {
  return {
    user: state.user
  };
};

export default connect(mstp, { signin })(SignIn);
