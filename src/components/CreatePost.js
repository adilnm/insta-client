import React from "react";
import { connect } from "react-redux";
import { createPost } from "../actions";

class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      url: "",
      image: ""
    };
  }

  componentDidMount() {
    const user=JSON.parse(localStorage.getItem("user"))
    return  !user ? this.props.history.push("/signin") : null;
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
        this.setState({ url: data.url });
      })
      .then(() =>
        this.props.createPost({
          title: this.state.title,
          body: this.state.body,
          pic: this.state.url
        })
      );
  };

  render() {
    
    return (
      <div
        className="card input-field"
        style={{
          margin: "30px auto",
          maxWidth: "500px",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="title"
            type="text"
            placeholder="title"
          />
          <input
            onChange={this.handleChange}
            name="body"
            type="text"
            placeholder="body"
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
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
            Submit Post
          </button>
        </form>
      </div>
    );
  }
}



export default connect(null, { createPost })(CreatePost);
