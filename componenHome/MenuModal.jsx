import { TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const MenuModal = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderColor: "#dcdcdc",
        paddingVertical: 14,
        backgroundColor: "#ffffff",
      }}>
      <View
        style={{
          flex: 10,
          alignItems: "center",
        }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#dcdcdc",
            width: 250,
            paddingVertical: 5,
            paddingHorizontal: 5,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={{ marginLeft: 5, flex: 1 }}
            onPress={() => {
              dispatch({ type: "SEARCH", payload: searchText });
            }}>
            <AntDesign name="search1" size={20} color="black" />
          </TouchableOpacity>
          <TextInput
            placeholder="Cari"
            style={{ flex: 5 }}
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              dispatch({ type: "SEARCH", payload: searchText });
            }}
          />
        </View>
      </View>
    </View>
  );
};
