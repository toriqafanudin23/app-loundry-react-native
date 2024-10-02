const INITIAL_STATE = {
  loggedInUser: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "LOGIN") {
    return { ...state, loggedInUser: action.payload };
  } else if (action.type === "LOGOUT") {
    return INITIAL_STATE;
  }

  return state;
};
