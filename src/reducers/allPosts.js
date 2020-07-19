export default function(state = [], action) {
  switch (action.type) {
    case "ALL-POSTS":
      return action.payload;
    default:
      return state;
  }
}
