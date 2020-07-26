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
      password: "",
      image: "",
      url: "https://plazto.com/upload/photos/avatar.jpg"
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.state.image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "dzytpgisl");
    fetch("https://api.cloudinary.com/v1_1/dzytpgisl/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        return data.url ? this.setState({ url: data.url }) : null;
      })
      .then(() =>
        this.props.signup({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          pic: this.state.url
        })
      );
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? this.props.history.push("/") : null;
  }

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
              type="email"
              placeholder="email"
            />
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="password"
            />
            <div className="file-field input-field">
              <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input
                  onChange={e => this.setState({ image: e.target.files[0] })}
                  type="file"
                />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
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
    user: state.auth
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    signup: data => dispatch(signup(data, ownProps))
  };
};

export default connect(mstp, mdtp)(SignUp);
