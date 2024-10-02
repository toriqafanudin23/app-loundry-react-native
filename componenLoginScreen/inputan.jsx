import { View, TextInput } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const InputTextLogin = (props) => {
  const bottom = props.bottom;
  const position = props.position;
  const width = props.width;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
        borderColor: "#808080",
        bottom: bottom,
        position: position,
        width: width,
      }}>
      <MaterialCommunityIcons name={props.icon} size={24} color="grey" />
      <TextInput
        onChangeText={props.set}
        placeholder={props.placeholder}
        style={{ padding: 10 }}
        value={props.text}
        keyboardType={props.keyboard}
      />
    </View>
  );
};

export default InputTextLogin;
