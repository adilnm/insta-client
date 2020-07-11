import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
    this.props.signup(this.state);
  };

  render() {
    return (
      <div className="myCard">
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              name="name"
              type="text"
              placeholder="name"
            />
            <input
              onChange={this.handleChange}
              name="email"
              type="text"
              placeholder="email"
            />
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="password"
            />

            <button
              type="submit"
              className="btn waves-effect waves-light #64b5f6 blue darken-1"
            >
              SignUp
            </button>
          </form>
          <h5>
            <Link to="/signin">Already have an account</Link>
          </h5>
        </div>
      </div>
    );
  }
}

export default connect(null, { signup })(SignUp);
