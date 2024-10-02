import { TouchableOpacity, View, Text, Alert, Image } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputTextLogin from "../componenLoginScreen/inputan";
import ButtonGeneral from "../componenLoginScreen/button";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const SetUsername = (text) => setUsername(text);
  const SetPassword = (text) => setPassword(text);
  const dispatch = useDispatch();
  const Login = async () => {
    if (username === "Admin" && password === "Admin123") {
      await AsyncStorage.setItem("loggedInUser", username);
      dispatch({
        type: "LOGIN",
        payload: username,
      });
    } else {
      Alert.alert(
        "Email or Password is Wrong!",
        "Email: Admin\nPassword: Admin123"
      );
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon-londri.png")}
        style={styles.image}
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "grey", fontWeight: "bold", fontSize: 20 }}>
          ENIGMA
        </Text>
        <Text style={{ color: "#5f9ea0", fontWeight: "bold", fontSize: 20 }}>
          LOUNDRY
        </Text>
      </View>
      <View style={{ height: 20 }}></View>
      <InputTextLogin
        text={username}
        set={SetUsername}
        icon="email"
        placeholder="Email"
        width="100%"
      />
      <InputTextLogin
        text={password}
        set={SetPassword}
        icon="key"
        placeholder="Password"
        width="100%"
      />
      <View style={{ height: 20 }}></View>
      <ButtonGeneral
        set={Login}
        color="#007bff"
        colorText="#ffffff"
        text="Login"
      />
      <View style={{ flexDirection: "row", position: "absolute", bottom: 10 }}>
        <Text style={{ color: "grey", fontSize: 12 }}>Dibuat oleh </Text>
        <Text style={{ color: "#5f9ea0", fontSize: 12 }}>Thoriq Afanudin</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    height: 30,
    borderRadius: 6,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 46,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 75,
  },
});

export default LoginScreen;
