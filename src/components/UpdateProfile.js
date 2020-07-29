import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { updateProfile } from "../actions";

class UpdateProfile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      name: props.user.name,
      email: props.user.name,
      image: "",
      url: props.user.pic
    };
  }

  handleShow = e => {
    this.setState({ show: !this.state.show });
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
        this.props.updateProfile({
          name: this.state.name,
          email: this.state.email,
          pic: this.state.url
        })
      );
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleShow} variant="primary">
          Launch demo modal
        </Button>

        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input
                onChange={this.handleChange}
                name="name"
                type="text"
                defaultValue={this.props.user.name}
                placeholder="name"
              />
              <input
                onChange={this.handleChange}
                name="email"
                type="email"
                defaultValue={this.props.user.email}
                placeholder="email"
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
                onClick={this.handleSubmit}
                className="btn waves-effect waves-light #64b5f6 blue darken-1"
              >
                SignUp
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleShow} variant="secondary">
              Close
            </Button>
            <Button variant="primary">Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mstp = ({ user }) => {
  return {
    user
  };
};

export default connect(mstp, { updateProfile })(UpdateProfile);
