export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case "POST_REGISTER_REQUEST":
      return {
        ...state,
      };
    case "POST_REGISTER_SUCCESS":
      return {
        user: action.payload,
      };
    case "POST_REGISTER_FAIL":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
