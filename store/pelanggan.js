const INITIAL_STATE = {
  name: "",
  phone: "",
};

export const pelangganReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "PELANGGANNAME") {
    return { ...state, name: action.payload };
  } else if (action.type === "PELANGGANPHONE") {
    return { ...state, phone: action.payload };
  }
  return state;
};
