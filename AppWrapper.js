import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "./screens/LoginScreen";
import Main from "./Main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const AppWrapper = () => {
  const authSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const checkLoggedInUser = async () => {
    const loggedInUser = await AsyncStorage.getItem("loggedInUser");

    dispatch({
      type: "LOGIN",
      payload: loggedInUser,
    });
  };
  useEffect(() => {
    checkLoggedInUser();
  }, []);
  return authSelector.loggedInUser ? <Main /> : <LoginScreen />;
};

export default AppWrapper;
