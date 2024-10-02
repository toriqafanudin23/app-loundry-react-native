import { Alert, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DropdownComponent from "../componenDropDown/DropDown";
import { useSelector } from "react-redux";
import DateTimeCustom from "../componenDropDown/DateTime";
import Ionicons from "@expo/vector-icons/Ionicons";
import { axiosInstance } from "../lib/axios";

const BuatTransaksi = (props) => {
  // Get data users
  const userSelector = useSelector((state) => state.user);
  const usernames = [];
  for (i = 0; i < userSelector.users.length; i++) {
    const { name } = userSelector.users[i];
    usernames.push({ label: name, value: name });
  }

  // Data picker
  const tipe = [
    { label: "Setrika", value: "Setrika" },
    { label: "Dry Clean", value: "Dry Clean" },
  ];
  let count = 1;
  const number = [];
  for (i = 0; i < 10; i++) {
    number.push({ label: `${count} kg`, value: count });
    count++;
  }

  // Mengambil picker dari redux
  const pesanan = useSelector((state) => state.pesanan);
  // onPressbutton
  let biaya = 0;
  if (pesanan.tipe === "Setrika") {
    biaya = pesanan.berat * 5000;
  } else if (pesanan.tipe === "Dry Clean") {
    biaya = pesanan.berat * 3000;
  }
  const pelanggan = useSelector((state) => state.pelanggan);
  const createTransaksi = async () => {
    await axiosInstance.post("/transaksi", {
      name: pelanggan.name,
      tipe: pesanan.tipe,
      jumlah: pesanan.berat,
      harga: biaya,
      tanggal: pesanan.tanggal,
    });
    console.log("Berhasil Post Data!");
    Alert.alert("Pesanan Berhasil.", "Silahkan Refresh Halaman!", [
      { text: "OK", onPress: props.tutup },
    ]);
    console.log("tutup modal");
  };
  const BuatPesanan = () => {
    Alert.alert(
      "Pesanan loundry",
      `Pelanggan\t\t\t: ${pelanggan.name}\nJenis loundry\t\t: ${pesanan.tipe}\nBerat Pakaian\t: ${pesanan.berat} kg\nBiaya\t\t\t\t\t\t\t: Rp. ${biaya}`,
      [
        {
          text: "OK",
          onPress: () => {
            createTransaksi();
          },
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      {/* <DropdownComponent
        selectItem="Pilih pelanggan"
        data={usernames}
        label="Nama pelanggan"
        icon="account"
        type="PELANGGAN"
      /> */}
      <DropdownComponent
        selectItem="Pilih tipe loundry"
        data={tipe}
        label="Tipe loundry"
        icon="tshirt-crew"
        type="TIPE"
      />
      <DropdownComponent
        selectItem="Berat baju"
        data={number}
        label="Dalam kilogram"
        icon="scale-balance"
        type="BERAT"
      />
      <DateTimeCustom />
      <TouchableOpacity onPress={BuatPesanan} style={{ paddingTop: 20 }}>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#007bff",
            borderRadius: 10,
            flexDirection: "row",
            padding: 8,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Ionicons name="create" size={18} color="#007bff" />
          <Text style={{ color: "#007bff", fontSize: 18, paddingLeft: 10 }}>
            Buat Pesanan
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    gap: 8,
    width: "100%",
  },
});

export default BuatTransaksi;
