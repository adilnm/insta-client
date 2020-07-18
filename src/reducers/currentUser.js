export default (state = null, action) => {
  switch (action.type) {
    case "CURRENT-USER":
      return action.payload;
    default:
      return state;
  }
};
