import { View, TouchableOpacity, Text } from "react-native";

const ButtonGeneral = (props) => {
  const color = props.color;
  const colorText = props.colorText;
  const borderColor = props.borderColor;
  const borderWidth = props.borderWidth;
  const position = props.position;
  const bottom = props.bottom;
  return (
    <TouchableOpacity
      onPress={props.set}
      title="Login"
      style={{ width: "100%", position: position, bottom: bottom }}>
      <View
        style={{
          height: 30,
          borderRadius: 6,
          backgroundColor: color,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          height: 46,
          borderColor: borderColor,
          borderWidth: borderWidth,
        }}>
        <Text style={{ color: colorText, fontSize: 17 }}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonGeneral;
