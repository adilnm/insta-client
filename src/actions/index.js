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
      .then(user => {
        dispatch({ type: "SIGNUP", payload: user });
      });
  };
};

export const createPost = data => {
  return dispatch => {
    fetch("/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ADD-POST", payload: data });
      });
  };
};

