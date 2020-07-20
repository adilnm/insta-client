export default (state = null, action) => {
  switch (action.type) {
    case "CURRENT-USER":
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};
