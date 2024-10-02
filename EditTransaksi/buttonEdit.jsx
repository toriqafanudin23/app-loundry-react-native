import { TouchableOpacity, View, Text } from "react-native";

const ButtonEdit = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ width: 150 }}>
      <View
        style={{
          borderWidth: 0.5,
          marginTop: props.marginTop,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
          borderColor: props.color,
          alignItems: "center",
        }}>
        <Text style={{ fontSize: 16, color: props.color }}>
          {props.placeholder}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonEdit;
