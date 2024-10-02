import { View, Text, TouchableOpacity, Modal } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProfilPelanggan = (props) => {
  return (
    <View
      style={{
        paddingVertical: 10,
        backgroundColor: "#ff7f50",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}>
          <MaterialIcons name="account-circle" size={50} color="#ffffff" />
        </View>

        <View
          style={{
            flex: 3,
            // backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text style={{ fontSize: 20 }}>{props.name}</Text>
          <Text style={{ color: "#ffe4e1" }}>{props.phone}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
            paddingRight: 15,
          }}>
          <TouchableOpacity onPress={props.onPress}>
            <AntDesign name="pluscircle" size={30} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfilPelanggan;
