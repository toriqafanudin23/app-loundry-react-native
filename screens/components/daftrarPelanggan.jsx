import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

const warna = ["#627182", "#FF6347", "#FFD700", "#4682B4", "#6A5ACD"];

export const DaftarPelanggan = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch({ type: "PELANGGAN", payload: props.name });
        navigation.navigate("Transaksi");
      }}
      style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: warna[props.name.length % 5],
        }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {props.name[0]}
        </Text>
      </View>

      <View style={{ flex: 3 }}>
        <Text>{props.name}</Text>
        <Text style={styles.text}>{props.noHP}</Text>
        <Text style={styles.text}>({props.banyakTransaksi}) Transaksi</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: "96%",
    height: 80,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
    gap: 14,
    backgroundColor: "#FFFFFF",
  },
  text: { fontSize: 11, color: "gray" },
});
