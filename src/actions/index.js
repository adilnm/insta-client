export const signup = data => {
  return dispatch => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(user => {
        dispatch({ type: "SIGNUP", payload: user });
      });
  };
};

export const signin = data => {
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
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch({ type: "SIGNUP", payload: data.user });
      });
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
      .then(user => dispatch({type: "CURRENT-USER", payload: user}));
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
