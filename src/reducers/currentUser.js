export default (state = null, action) => {
  switch (action.type) {
    case "CURRENT-USER":
      return action.payload;
    case "ADD-FOLLOWING":
      return { ...state, following: [...state.following, action.payload] };
    case "REMOVE-FOLLOWING":
      return {
        ...state,
        following: [...state.following].filter(item => item !== action.payload)
      };
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};
