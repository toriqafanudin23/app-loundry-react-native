import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const ButtonDot3 = (props) => {
  return (
    <View style={styles.modalContent}>
      <TouchableOpacity
        onPress={props.onPressAdd}
        style={{
          flexDirection: "row",
          paddingBottom: 8,
          alignItems: "center",
        }}>
        <AntDesign
          name="adduser"
          size={24}
          color="black"
          style={{ flex: 1, paddingLeft: 20 }}
        />
        <Text style={{ paddingRight: 10, flex: 2 }}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}>
        <MaterialIcons
          name="logout"
          size={24}
          color="red"
          style={{ flex: 1, paddingLeft: 20 }}
        />
        <Text style={{ color: "red", paddingRight: 10, flex: 2 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonDot3;

const styles = StyleSheet.create({
  modalContent: {
    width: 140,
    height: 80,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // untuk Android
    backgroundColor: "white",
  },
});
