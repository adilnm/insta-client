import React from "react";
import { Button, Modal } from "react-bootstrap";

class UpdateProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handleShow = e => {
    this.setState({ show: !this.state.show });
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

export default UpdateProfile;
