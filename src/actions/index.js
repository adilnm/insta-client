export const signup = (data, ownProps) => {
  return dispatch => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "CURRENT-USER", payload: data.user });
        }
        dispatch({ type: "SIGNUP", payload: data });
        if (!data.error) {
          ownProps.history.push("/");
        }
      });
  };
};

export const signin = (data, ownProps) => {
  console.log(ownProps)
  return dispatch => {
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "CURRENT-USER", payload: data.user });
        }
        dispatch({ type: "SIGNUP", payload: data });
        if (!data.error) {
          ownProps.history.push("/");
        }
      });
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: "LOGOUT"
  };
};

export const currentUser = () => {
  return dispatch => {
    fetch("/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then(user => dispatch({ type: "CURRENT-USER", payload: user }));
  };
};

export const createPost = data => {
  return dispatch => {
    fetch("/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ADD-POST", payload: data });
      });
  };
};

export const allPosts = () => {
  return dispatch => {
    fetch("/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "ALL-POSTS", payload: data.posts }));
  };
};

export const myPosts = () => {
  return dispatch => {
    fetch("/myposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "MY-POSTS", payload: data.myPost }));
  };
};

export const likes = id => {
  return dispatch => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({ postId: id })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ALL-POSTS", payload: data.posts });
      });
  };
};

export const unlikes = id => {
  return dispatch => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({ postId: id })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ALL-POSTS", payload: data.posts });
      });
  };
};

export const comments = (text, postId) => {
  return dispatch => {
    fetch("/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        text,
        postId
      })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ALL-POSTS", payload: data.posts });
      });
  };
};

export const deletePost = postId => {
  return dispatch => {
    fetch(`/deletepost/${postId}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "DELETE-POST", payload: postId });
      });
  };
};

export const userProfile = id => {
  return dispatch => {
    fetch(`/user/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FIND-USER", payload: data });
      });
  };
};

export const follow = followId => {
  return dispatch => {
    fetch("/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        followId
      })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FIND-USER", payload: data });
        dispatch({ type: "ADD-FOLLOWING", payload: data.user._id });
      });
  };
};

export const unFollow = unfollowId => {
  return dispatch => {
    fetch("/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        unfollowId
      })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FIND-USER", payload: data });
        dispatch({ type: "REMOVE-FOLLOWING", payload: data.user._id });
      });
  };
};

export const followedPosts = () => {
  return dispatch => {
    fetch("/followedposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "FOLLOWED-POSTS", payload: data.posts }));
  };
};

export const updatePic = pic => {
  return dispatch => {
    fetch("/updatepic", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify(pic)
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "CURRENT-USER", payload: data }));
  };
};

export const updateProfile = (data) => {
  return dispatch => {
    fetch("/updateprofile", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem("user", JSON.stringify(data));
          dispatch({ type: "CURRENT-USER", payload: data });
          // browserHistory.push('/')

          // ownProps.history.push("/");
        }
        // dispatch({ type: "SIGNUP", payload: {user:data,token:localStorage.getItem("token")} });
      });
  };
};
