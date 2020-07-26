import React from "react";
import { connect } from "react-redux";
import { userProfile, follow, unFollow } from "../actions";

class UserProfile extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.props.history.push("/signin");
    } else {
      this.props.userProfile(this.props.match.params.userid);
    }
  }
  render() {
    const { user, posts, currentUser } = this.props;
    if (user) {
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
              {!user.followers.includes(currentUser._id) ? (
                <button
                  onClick={e => this.props.follow(user._id)}
                  className="btn waves-effect waves-light #64b5f6 blue darken-1"
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={e => this.props.unFollow(user._id)}
                  className="btn waves-effect waves-light #64b5f6 blue darken-1"
                >
                  Unfollow
                </button>
              )}
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
    return <div></div>;
  }
}

const mstp = ({ otherProfile, user }) => {
  return {
    user: otherProfile.user,
    posts: otherProfile.posts,
    currentUser: user
  };
};
export default connect(mstp, { userProfile, follow, unFollow })(UserProfile);
