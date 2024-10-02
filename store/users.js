const INITIAL_STATE = {
  users: [],
  transaksi: [],
  pelanggan: "",
  addName: "",
  addTipe: "",
  ubahTransaksi: {},
};

export const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "FETCH_USERS") {
    return { ...state, users: action.payload };
  } else if (action.type === "TRANSAKSI") {
    return { ...state, transaksi: action.payload };
  } else if (action.type === "PELANGGAN") {
    return { ...state, pelanggan: action.payload };
  } else if (action.type === "ADDNAME") {
    return { ...state, addName: action.payload };
  } else if (action.type === "ADDTIPE") {
    return { ...state, addTipe: action.payload };
  } else if (action.type === "UBAH TRANSAKSI") {
    return { ...state, ubahTransaksi: action.payload };
  }
  return state;
};
