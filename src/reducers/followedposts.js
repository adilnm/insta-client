export default function(state = [], action) {
  switch (action.type) {
    case "FOLLOWED-POSTS":
      return action.payload;
    default:
      return state;
  }
}
