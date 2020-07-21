import React from "react";
import { connect } from "react-redux";
import { myPosts } from "../actions";

class Profile extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.props.history.push("/signin");
    } else {
      this.props.myPosts();
    }
  }
  render() {
    return (
      <div style={{ maxWidth: "550px", margin: "0px auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "18px,0px",
            borderBottom: "1px solid grey"
          }}
        >
          <div>
            <img
              style={{ width: "160px", height: "160px", borderRadius: "80px" }}
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="profile pic"
            />
          </div>
          <div>
            <h4>{this.props.user ? this.props.user.name : null}</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%"
              }}
            >
              <h6>40 posts</h6>
              <h6>40 followers</h6>
              <h6>40 following</h6>
            </div>
          </div>
        </div>
        <div className="gallery">
          {this.props.posts.map(item => {
            return (
              <img
                key={item._id}
                className="item"
                src={item.photo}
                alt={item.title}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mstp = ({ myPosts, user }) => {
  return { posts: myPosts, user };
};
export default connect(mstp, { myPosts })(Profile);
