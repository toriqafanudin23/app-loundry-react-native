import { View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ItemNama = (props) => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        width: "90%",
        flexDirection: "row",
        borderRadius: 10,
        borderColor: "grey",
        paddingVertical: 13,
        marginBottom: 4,
        backgroundColor: "#f8f8ff",
      }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <MaterialIcons name={props.icon} size={24} color="#007bff" />
      </View>
      <Text style={{ flex: 7, fontSize: 16 }}>{props.name}</Text>
    </View>
  );
};

export default ItemNama;
