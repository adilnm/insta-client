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
    const { user, posts } = this.props;
    if (user && posts) {
      return (
        <div
          style={{ maxWidth: "550px", margin: "0px auto", paddingTop: "5px" }}
        >
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
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px"
                }}
                src={user.pic}
                alt="profile pic"
              />
            </div>
            <div>
              <h4>{user.name}</h4>
              <h5>{user.email}</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%"
                }}
              >
                <h6>{posts.length} posts</h6>
                <h6>{user.followers.length} followers</h6>
                <h6>{user.following.length} following</h6>
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
    } else {
      return <div></div>;
    }
  }
}

const mstp = ({ myPosts, user }) => {
  return { posts: myPosts, user };
};
export default connect(mstp, { myPosts })(Profile);
