import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import EditTransaksi from "../EditTransaksi/editTransaksi";
import { useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const RiwayatTransaksiItem = (props) => {
  //Convert Tanggal
  const tahun = props.tanggal.slice(0, 4);
  const bulan = props.tanggal.slice(5, 7);
  const hari = props.tanggal.slice(8, 10);
  const listBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "July",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const tanggalDipilih = `${hari} ${listBulan[Number(bulan) - 1]} ${tahun}`;
  const ID = props.id;
  const name = props.name;
  const tipe = props.tipe;
  const jumlah = props.jumlah;
  const harga = props.harga;
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View
      style={{
        alignItems: "center",
        paddingVertical: 2,
      }}>
      <TouchableOpacity
        style={styles.itemTransaksi}
        onPress={() => {
          setIsVisible(true);
        }}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto
              name="date"
              size={18}
              color="black"
              style={{ marginRight: 8 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                paddingBottom: 10,
              }}>
              {tanggalDipilih}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="tshirt-v-outline"
              size={20}
              color="#8a2be2"
              style={{ marginRight: 8 }}
            />
            <Text style={{ color: "#8a2be2" }}>{tipe}</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#007bff", fontSize: 16, paddingBottom: 10 }}>
              Rp. {harga}
            </Text>
            <MaterialIcons
              name="payment"
              size={20}
              color="#007bff"
              style={{ marginLeft: 8 }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "grey" }}>{jumlah} kg</Text>
            <MaterialCommunityIcons
              name="scale"
              size={20}
              color="grey"
              style={{ marginLeft: 8 }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Modal visible={isVisible}>
        <EditTransaksi
          id={ID}
          name={name}
          tanggal={props.tanggal}
          tipe={tipe}
          jumlah={jumlah}
          harga={harga}
          tutup={() => {
            setIsVisible(false);
          }}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  itemTransaksi: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 3, // untuk Android
  },
});

export default RiwayatTransaksiItem;
