import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useDispatch } from "react-redux";

export const GetDataUsers = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const fetchUsers = async () => {
    setIsLoading(true);
    const responseDataUsers = await axiosInstance.get("/users");
    const responseDataTransaksi = await axiosInstance.get("/transaksi");
    setIsLoading(false);
    dispatch({
      type: "FETCH_USERS",
      payload: responseDataUsers.data,
    });
    dispatch({
      type: "TRANSAKSI",
      payload: responseDataTransaksi.data,
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
};
