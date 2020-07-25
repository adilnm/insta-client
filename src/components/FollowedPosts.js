import React from "react";
import { connect } from "react-redux";
import {
  followedPosts,
  likes,
  unlikes,
  comments,
  deletePost
} from "../actions";
import { Link } from "react-router-dom";

class FollowedPosts extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    // return !user ? this.props.history.push("/signin") : null;
    if (!user) {
      this.props.history.push("/signin");
    } else {
      this.props.followedPosts();
    }
  }

  render() {
    const userId = this.props.user ? this.props.user._id : null;
    return (
      <div className="Home">
        {this.props.posts.map(item => {
          return (
            <div key={item._id} className="card home-card">
              <h5 style={{ padding: "5px" }}>
                <Link to={"/profile/" + item.postedBy._id}>
                  {item.postedBy.name}
                </Link>
                {item.postedBy._id === this.props.user._id && (
                  <i
                    style={{ float: "right" }}
                    className="material-icons"
                    onClick={e => this.props.deletePost(item._id)}
                  >
                    delete
                  </i>
                )}
              </h5>
              <div className="card-image">
                <img src={item.photo} alt="" />
              </div>
              <div className="card-content">
                <i className="material-icons" style={{ color: "red" }}>
                  favorite
                </i>
                {item.likes.includes(userId) ? (
                  <i
                    onClick={e => this.props.unlikes(item._id)}
                    className="material-icons"
                    disabled
                  >
                    thumb_down
                  </i>
                ) : (
                  <i
                    onClick={e => this.props.likes(item._id)}
                    className="material-icons"
                    disabled
                  >
                    thumb_up
                  </i>
                )}

                <h6>{item.likes.length} likes</h6>
                <h6>{item.title}</h6>
                <p>{item.body}</p>
                {item.comments.map(comment => {
                  return (
                    <h6 key={comment._id}>
                      <b>
                        <span style={{ fontWeight: "500" }}>
                          <b>{comment.postedBy.name} </b>
                        </span>
                      </b>
                      {comment.text}
                    </h6>
                  );
                })}
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    this.props.comments(e.target[0].value, item._id);
                  }}
                >
                  <input type="text" placeholder="Add a comment" />
                </form>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mstp = ({ followedPosts, user }) => {
  return {
    posts: followedPosts,
    user
  };
};
export default connect(mstp, {
  followedPosts,
  likes,
  unlikes,
  comments,
  deletePost
})(FollowedPosts);
