import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../lib/axios";
import { useNavigation } from "@react-navigation/native";

const UbahTransaksi = () => {
  const userSelector = useSelector((state) => state.user);
  const jumlahHolder = userSelector.ubahTransaksi.jumlah + " kg";
  const hargaHolder = "Rp. " + userSelector.ubahTransaksi.harga;
  const [tanggal, setTanggal] = useState(userSelector.ubahTransaksi.tanggal);
  const [tipe, setTipe] = useState(userSelector.ubahTransaksi.tipe);
  const [jumlah, setJumlah] = useState(userSelector.ubahTransaksi.jumlah);
  const [harga, setHarga] = useState(userSelector.ubahTransaksi.harga);
  const transaksi = {
    id: userSelector.ubahTransaksi.id,
    name: userSelector.ubahTransaksi.name,
    tanggal: tanggal,
    tipe: tipe,
    jumlah: jumlah,
    harga: harga,
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ubahTransaksi = async () => {
    if (
      jumlah != userSelector.ubahTransaksi.jumlah ||
      tanggal != userSelector.ubahTransaksi.tanggal ||
      tipe != userSelector.ubahTransaksi.tipe ||
      harga != userSelector.ubahTransaksi.harga
    ) {
      try {
        const response = await axiosInstance.put(
          `/transaksi/${userSelector.ubahTransaksi.id}`,
          transaksi
        );
        const responseTransaksi = await axiosInstance.get("/transaksi");
        dispatch({
          type: "TRANSAKSI",
          payload: responseTransaksi.data,
        });
        console.log("Data user berhasil diupdate:", response.data);
      } catch (error) {
        console.error("Gagal mengupdate data user:", error);
      }
      Alert.alert("Data berhasil dirubah!", "", [
        {
          text: "Lihat Transaksi",
          onPress: () => {
            navigation.navigate("Transaksi");
          },
        },
      ]);
    } else {
      Alert.alert("Tidak ada data yang dirubah!");
    }
  };
  const hapusTransaksi = async () => {
    await axiosInstance.delete(`/transaksi/${userSelector.ubahTransaksi.id}`);
    console.log("Transaksi berhasil dihapus dan data diperbarui.");
    const responseTransaksi = await axiosInstance.get("/transaksi");
    dispatch({
      type: "TRANSAKSI",
      payload: responseTransaksi.data,
    });
    navigation.navigate("Transaksi");
  };
  return (
    <View
      style={{
        alignItems: "center",
      }}>
      <StatusBar style="auto" />
      <View style={{ height: 100 }} />
      <View style={{ gap: 12 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            color: "#FF4C4C",
          }}>
          {userSelector.ubahTransaksi.name}
        </Text>
        <View style={{ gap: 6 }}>
          <Text
            style={{ alignItems: "center", fontSize: 16, color: "#4682B4" }}>
            Tanggal
          </Text>
          <TextInput
            placeholder={userSelector.ubahTransaksi.tanggal}
            style={styles.inputText}
            onChangeText={(text) => setTanggal(text)}
          />
        </View>
        <View style={{ gap: 6 }}>
          <Text
            style={{ alignItems: "center", fontSize: 16, color: "#4682B4" }}>
            Tipe
          </Text>
          <TextInput
            placeholder={userSelector.ubahTransaksi.tipe}
            style={styles.inputText}
            onChangeText={(text) => setTipe(text)}
          />
        </View>
        <View style={{ gap: 6 }}>
          <Text
            style={{ alignItems: "center", fontSize: 16, color: "#4682B4" }}>
            Jumlah
          </Text>
          <TextInput
            placeholder={jumlahHolder}
            style={styles.inputText}
            onChangeText={(text) => setJumlah(text)}
            keyboardType="Numeric"
          />
        </View>
        <View style={{ gap: 6 }}>
          <Text
            style={{ alignItems: "center", fontSize: 16, color: "#4682B4" }}>
            Harga
          </Text>
          <TextInput
            placeholder={hargaHolder}
            style={styles.inputText}
            onChangeText={(text) => setHarga(text)}
            keyboardType="Numeric"
          />
        </View>
      </View>
      <View style={{ height: 20 }}></View>
      <TouchableOpacity
        style={{ width: "94%", alignItems: "center" }}
        onPress={ubahTransaksi}>
        <View style={styles.buttonUbahTransaksi}>
          <Text style={styles.ubahText}>Ubah Transaksi</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 10 }}></View>
      <TouchableOpacity
        style={{ width: "94%", alignItems: "center" }}
        onPress={() => {
          Alert.alert("Yakin ingin menghapus transaksi?", "", [
            {
              text: "Ya",
              onPress: () => {
                hapusTransaksi();
              },
            },
            {
              text: "Tidak",
              onPress: () => {
                console.log("Cancel!");
              },
            },
          ]);
        }}>
        <View style={styles.buttonHapusTransaksi}>
          <Text style={styles.ubahText}>Hapus Transaksi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    height: 50,
    width: 340,
    paddingHorizontal: 20,
    borderColor: "gray",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
  },
  ubahText: { color: "#FFFFFF", fontSize: 17 },
  buttonUbahTransaksi: {
    borderRadius: 6,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
    height: 46,
    width: 320,
  },
  buttonHapusTransaksi: {
    borderRadius: 6,
    backgroundColor: "#FF4C4C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
    height: 46,
    width: 320,
  },
});

export default UbahTransaksi;
