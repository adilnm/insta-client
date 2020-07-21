export default function(state = [], action) {
  switch (action.type) {
    case "ADD-POST":
      return [...state, action.payload];
    case "MY-POSTS":
      return action.payload;

    default:
      return state;
  }
}
