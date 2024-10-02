import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

// const warna = ["#627182", "#FF6347", "#FFD700", "#4682B4", "#6A5ACD"];

export const RiwayatTransaksi = (props) => {
  const navigation = useNavigation();
  const transaksi = {
    id: props.id,
    name: props.name,
    tanggal: props.tanggal,
    tipe: props.tipe,
    jumlah: props.jumlah,
    harga: props.harga,
  };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Ubah Transaksi");
        dispatch({
          type: "UBAH TRANSAKSI",
          payload: transaksi,
        });
      }}>
      <View style={styles.container}>
        <View style={{ flex: 1, gap: 8, paddingLeft: 14 }}>
          <Text style={{ fontWeight: "bold" }}>{props.tanggal}</Text>
          <Text style={{ color: "#FF6347" }}>{props.tipe}</Text>
        </View>
        <View style={{ flex: 1, gap: 8, paddingRight: 14 }}>
          <Text
            style={{
              textAlign: "right",
              color: "#4682B4",
              fontWeight: "bold",
            }}>
            Rp. {props.harga}
          </Text>
          <Text style={{ textAlign: "right", color: "gray" }}>
            {props.jumlah} kg
          </Text>
        </View>
      </View>
      <View style={{ height: 8 }}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: "96%",
    height: 80,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
});
