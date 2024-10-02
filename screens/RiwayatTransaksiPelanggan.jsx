import {
  FlatList,
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import RiwayatTransaksiItem from "../componenTransaksi/riwayatTransaksi";
import ProfilPelanggan from "../componenTransaksi/profilPelanggan";
import { useEffect, useState } from "react";
import BuatTransaksi from "./BuatTransaksi";
import { axiosInstance } from "../lib/axios";

const RiwayatTransaksiPelanggan = ({ navigation }) => {
  const pelanggan = useSelector((state) => state.pelanggan);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Get Data Transaksi Pelanggan
  const [transaksiList, setTransaksiList] = useState([]);
  const getTransaksi = async () => {
    setIsLoading(true);
    const response = await axiosInstance.get("/transaksi");
    setIsLoading(false);
    setTransaksiList(response.data);
  };
  useEffect(() => {
    getTransaksi();
  }, []);
  let transactionByName = [];
  for (i = transaksiList.length; i > 0; i--) {
    const { name } = transaksiList[i - 1];
    if (name === pelanggan.name) {
      transactionByName.push(transaksiList[i - 1]);
    }
  }

  const off = () => {
    setIsVisible(false);
  };
  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "#ffe4e1" }}>
      <SafeAreaView />
      <StatusBar style="auto" />
      <View style={{ alignItems: "center", paddingBottom: 5 }}>
        <ProfilPelanggan
          onPress={() => setIsVisible(true)}
          name={pelanggan.name}
          phone={pelanggan.phone}
        />
      </View>
      <View style={{ width: "96%", gap: 4, height: 720 }}>
        <FlatList
          refreshing={isLoading}
          onRefresh={getTransaksi}
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
          data={transactionByName}
          renderItem={({ item }) => {
            return (
              <RiwayatTransaksiItem
                id={item.id}
                name={item.name}
                tanggal={item.tanggal}
                tipe={item.tipe}
                harga={item.harga}
                jumlah={item.jumlah}
              />
            );
          }}
        />
      </View>
      <Modal
        transparent={true}
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => setIsVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <BuatTransaksi
                  onPress={off}
                  tutup={() => {
                    setIsVisible(false);
                    getTransaksi();
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end", // Modal akan muncul di tengah layar
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Membuat background transparan
  },
  modalContent: {
    width: "100%",
    height: 300,
    backgroundColor: "white",
    borderRadius: 40,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "flex-end",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // untuk Android
    backgroundColor: "white",
  },
});

export default RiwayatTransaksiPelanggan;
