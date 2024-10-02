const INITIAL_STATE = {
  pelanggan: "",
  tipe: "",
  berat: 0,
  tanggal: "",
};

export const pesananReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "PELANGGAN") {
    return { ...state, pelanggan: action.payload };
  } else if (action.type === "TIPE") {
    return { ...state, tipe: action.payload };
  } else if (action.type === "BERAT") {
    return { ...state, berat: action.payload };
  } else if (action.type === "TGL") {
    return { ...state, tanggal: action.payload };
  } else if (action.type === "ISVISIBLE") {
    return { ...state, isVisible: action.payload };
  }

  return state;
};
