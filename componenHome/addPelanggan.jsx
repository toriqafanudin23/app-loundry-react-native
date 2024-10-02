import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { axiosInstance } from "../lib/axios";

const AddPelanggan = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const postData = async () => {
    await axiosInstance.post("/users", { name: name, noHP: phone });
    console.log("Berhasil Tambah Pelanggan!");
    Alert.alert("Berhasil", "", [{ text: "OK", onPress: props.batal }]);
  };
  return (
    <View style={{ backgroundColor: "#ffe4e1", flex: 1 }}>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 30,
          marginBottom: 5,
        }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons name="account" size={30} color="#007bff" />
        </View>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
          style={{ flex: 5, fontSize: 18 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 30,
        }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Feather name="phone" size={30} color="#007bff" />
        </View>
        <TextInput
          value={phone}
          onChangeText={(text) => setPhone(text)}
          placeholder="Phone"
          style={{ flex: 5, fontSize: 18 }}
        />
      </View>
      <View style={{ flex: 8 }}></View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={props.batal}>
          <View
            style={{
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
              marginHorizontal: 20,
            }}>
            <Text style={{ fontSize: 18 }}>Batal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={postData}>
          <View
            style={{
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
              marginHorizontal: 20,
            }}>
            <Text style={{ fontSize: 18 }}>Simpan</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPelanggan;
