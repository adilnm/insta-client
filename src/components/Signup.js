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

  // componentDidMount() {
  //   console.log(this.props.user);
  // }

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

const mstp = state => {
  return {
    user: state.user
  };
};

export default connect(mstp, { signup })(SignUp);
