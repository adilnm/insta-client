import React from "react";
import { connect } from "react-redux";
import { myPosts, updatePic } from "../actions";
import UpdateProfile from "./UpdateProfile";

class Profile extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.props.history.push("/signin");
    } else {
      this.props.myPosts();
    }
  }

  updatePic = pic => {
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "dzytpgisl");
    fetch("https://api.cloudinary.com/v1_1/dzytpgisl/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        this.props.updatePic({
          pic: data.url
        });
      });
  };
  render() {
    const { user, posts } = this.props;
    if (user && posts) {
      return (
        <div
          style={{ maxWidth: "550px", margin: "0px auto", paddingTop: "5px" }}
        >
          <div
            style={{
              margin: "18px,0px",
              borderBottom: "1px solid grey"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around"
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
            <div style={{ margin: "10px" }} className="file-field input-field">
              <UpdateProfile />

              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
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
export default connect(mstp, { myPosts, updatePic })(Profile);
