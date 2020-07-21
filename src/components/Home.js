import React from "react";
import { connect } from "react-redux";
import { allPosts, likes } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    // return !user ? this.props.history.push("/signin") : null;
    if (!user) {
      this.props.history.push("/signin");
    } else {
      this.props.allPosts();
    }
  }

  render() {
    return (
      <div className="Home">
        {this.props.posts.map(item => {
          return (
            <div key={item._id} className="card home-card">
              <h5>{item.postedBy.name}</h5>
              <div className="card-image">
                <img src={item.photo} alt="" />
              </div>
              <div className="card-content">
                <i className="material-icons" style={{ color: "red" }}>
                  favorite
                </i>
                <i
                  onClick={e => this.props.likes(item._id)}
                  className="material-icons"
                >
                  thumb_up
                </i>
                <i className="material-icons">thumb_down</i>
                <h6>{item.likes.length} likes</h6>
                <h6>{item.title}</h6>
                <p>{item.body}</p>
                <input type="text" placeholder="Add a comment" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mstp = ({ posts }) => {
  return {
    posts
  };
};
export default connect(mstp, { allPosts, likes })(Home);
