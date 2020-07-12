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
