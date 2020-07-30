export default function(state = [], action) {
  switch (action.type) {
    case "ALL-POSTS":
      return action.payload;
    case "DELETE-POST":
      return [...state].filter(post => post._id !== action.payload);
    default:
      return state;
  }
}
