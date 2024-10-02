import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { axiosInstance } from "../lib/axios";
import { ValidationInput } from "../Validasi/ValidasiTambahPelanggan";
import { useDispatch } from "react-redux";
import InputTextLogin from "../componenLoginScreen/inputan";
import ButtonGeneral from "../componenLoginScreen/button";

export const TambahPelanggan = ({ navigation }) => {
  const [inputNama, setInputNama] = useState("");
  const [inputNoHP, setInputNoHP] = useState("");
  const SetInputNama = (text) => setInputNama(text);
  const SetInputNoHP = (text) => setInputNoHP(text);

  const [isValid, message] = ValidationInput(inputNama, inputNoHP);
  const dispatch = useDispatch();
  const createPelanggan = async () => {
    await axiosInstance.post("/users", {
      name: inputNama,
      noHP: inputNoHP,
    });
    const response = await axiosInstance.get("/users");
    dispatch({
      type: "FETCH_USERS",
      payload: response.data,
    });
    Alert.alert("Berhasil menambahkan pelanggan baru!", "", [
      {
        text: "OK",
        onPress: () => {
          navigation.navigate("Home");
        },
      },
    ]);
  };

  const AddPelanggan = () => {
    if (inputNama && inputNoHP) {
      if (isValid === false) {
        Alert.alert(message);
      } else {
        createPelanggan();
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTambahPelanggan}>
        <Image
          source={require("../assets/icon-londri.png")}
          style={styles.image}
        />
        <InputTextLogin
          text={inputNama}
          set={SetInputNama}
          icon="account"
          placeholder="Name"
          width="100%"
        />
        <InputTextLogin
          text={inputNoHP}
          set={SetInputNoHP}
          icon="cellphone"
          placeholder="Phone"
          keyboard="numeric"
          width="100%"
        />

        <View style={{ height: 20 }}></View>
        <ButtonGeneral
          set={AddPelanggan}
          color="#007bff"
          colorText="#ffffff"
          text="Tambah Pelanggan Baru"
        />
        <View style={{ height: 100 }}></View>
        <ButtonGeneral
          set={() => {
            navigation.navigate("Transaksi Baru");
          }}
          color="#ffffff"
          colorText="#007bff"
          text="Buat Transaksi Baru"
          borderWidth={1}
          borderColor="#007bff"
          position="absolute"
          bottom={10}
        />
      </View>
      <View style={{ height: 20 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    backgroundColor: "#ffffff",
  },
  viewTambahPelanggan: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "90%",
  },
  inputText: {
    height: 50,
    width: "94%",
    paddingHorizontal: 20,
    borderColor: "gray",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
  },
  addText: { color: "#2F2F2F", fontSize: 17 },
  buttonTambahPelanggan: {
    borderRadius: 6,
    backgroundColor: "#E0F7FA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
    height: 46,
    borderColor: "gray",
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 75,
  },
});
