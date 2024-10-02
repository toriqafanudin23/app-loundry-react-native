const INITIAL_STATE = {
  tipe: "",
  jumlah: 0,
  tanggal: "",
  harga: 0,
};

export const editReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "UBAHTIPE") {
    return { ...state, tipe: action.payload };
  } else if (action.type === "UBAHJUMLAH") {
    return { ...state, jumlah: action.payload };
  } else if (action.type === "UBAHTANGGAL") {
    return { ...state, tanggal: action.payload };
  } else if (action.type === "UBAHHARGA") {
    return { ...state, harga: action.payload };
  }
  return state;
};
