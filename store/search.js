const INITIAL_STATE = {
  search: "",
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SEARCH") {
    return { ...state, search: action.payload };
  }
  return state;
};
