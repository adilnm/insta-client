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

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? this.props.history.push("/") : null;
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
    if (this.props.auth.error) {
      errorClass = "alert alert-danger";
    }
    return (
      <div className="myCard">
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <div className={errorClass} role="alert">
            {this.props.auth.error}
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
    auth: state.auth,
    user: state.user
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
  signin: data => dispatch(signin(data, ownProps)),
  };
};
export default connect(mstp, mdtp)(SignIn);
