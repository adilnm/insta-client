import React from "react";

class Home extends React.Component {
  
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    return !user ? this.props.history.push("/signin") : null;
  }

  render() {
    return (
      <div className="Home">
        <div className="card home-card">
          <h5>Jon</h5>
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="card-content">
            <i className="material-icons" style={{ color: "red" }}>
              favorite
            </i>

            <h6>Title</h6>
            <p>This is an amzing post</p>
            <input type="text" placeholder="Add a comment" />
          </div>
        </div>
        <div className="card home-card">
          <h5>Jon</h5>
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="card-content">
            <i className="material-icons" style={{ color: "red" }}>
              favorite
            </i>
            <h6>Title</h6>
            <p>This is an amzing post</p>
            <input type="text" placeholder="Add a comment" />
          </div>
        </div>
        <div className="card home-card">
          <h5>Jon</h5>
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="card-content">
            <i className="material-icons" style={{ color: "red" }}>
              favorite
            </i>

            <h6>Title</h6>
            <p>This is an amzing post</p>
            <input type="text" placeholder="Add a comment" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
