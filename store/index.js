import { combineReducers } from "redux";
import { userReducer } from "./users";
import { authReducer } from "./auth";
import { pesananReducer } from "./transaksi";
import { searchReducer } from "./search";
import { pelangganReducer } from "./pelanggan";
import { editReducer } from "./edit";

export const reducers = combineReducers({
  user: userReducer,
  auth: authReducer,
  pesanan: pesananReducer,
  search: searchReducer,
  pelanggan: pelangganReducer,
  edit: editReducer,
});
