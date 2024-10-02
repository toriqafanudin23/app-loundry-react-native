import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import DropdownEdit from "../componenDropDown/DropDownEdit";
import ItemNama from "./itemNama";
import DateTimeEdit from "../componenDropDown/DateTimeEdit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import ButtonEdit from "./buttonEdit";

const EditTransaksi = (props) => {
  const ID = props.id;
  const name = props.name;
  const tanggal = props.tanggal;
  const tipeAwal = props.tipe;
  const jumlah = props.jumlah;
  let hargaAwal = props.harga;
  // dispatch awal
  const dispatch = useDispatch();
  const dispatchAwal = () => {
    dispatch({ type: "UBAHTANGGAL", payload: tanggal });
    dispatch({ type: "UBAHTIPE", payload: tipeAwal });
    dispatch({ type: "UBAHJUMLAH", payload: jumlah });
    dispatch({ type: "UBAHHARGA", payload: hargaAwal });
  };
  useEffect(() => {
    dispatchAwal(); // Panggil fungsi dispatchAwal di dalam useEffect
  }, []);

  // data dipilih
  const edit = useSelector((state) => state.edit);
  if (edit.tipe === "Setrika") {
    hargaAwal = edit.jumlah * 5000;
  } else if (edit.tipe === "Dry Clean") {
    hargaAwal = edit.jumlah * 3000;
  }
  const Peringatan = () => {
    Alert.alert("Yakin ingin ubah data?", "", [
      {
        text: "Ya",
        onPress: () => {
          UbahData();
        },
      },
      { text: "Tidak", onPress: () => console.log("Cancel") }, // Lebih baik gunakan fungsi untuk onPress
    ]);
  };
  const PeringatanHapus = () => {
    Alert.alert("Yakin ingin hapus data?", "", [
      {
        text: "Ya",
        onPress: () => {
          HapusData();
        },
      },
      { text: "Tidak", onPress: () => console.log("Cancel") }, // Lebih baik gunakan fungsi untuk onPress
    ]);
  };

  const UbahData = async () => {
    const data = {
      name: name,
      tanggal: edit.tanggal,
      tipe: edit.tipe,
      jumlah: edit.jumlah,
      harga: hargaAwal,
    };
    await axiosInstance.put(`/transaksi/${ID}`, data);
    Alert.alert("Berhasil!", "Silahkan refresh halaman", [
      { text: "OK", onPress: props.tutup },
    ]);
  };
  const HapusData = async () => {
    await axiosInstance.delete(`/transaksi/${ID}`);
    Alert.alert("Berhasil Hapus Data!", "Jangan menyesal :(", [
      { text: "OK", onPress: props.tutup },
    ]);
  };

  // data awal
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
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#ffe4e1",
      }}>
      <SafeAreaView />
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ItemNama name={name} icon="account-box" />
        <DropdownEdit
          nilaiAwal={tipeAwal}
          data={tipe}
          label="tipe loundry"
          icon="tshirt-crew"
          type="UBAHTIPE"
        />
        <DropdownEdit
          nilaiAwal={jumlah + " kg"}
          data={number}
          label="Dalam kilogram"
          icon="scale-balance"
          type="UBAHJUMLAH"
        />
        <ItemNama name={"Rp. " + hargaAwal} icon="payment" />
        <DateTimeEdit tanggal={tanggal.slice(0, 10)} />
        <ButtonEdit
          onPress={() => {
            Peringatan();
          }}
          placeholder="Ubah Data"
          color="#007bff"
          marginTop={40}
        />
        <ButtonEdit
          onPress={() => {
            PeringatanHapus();
          }}
          placeholder="Hapus Data"
          color="red"
          marginTop={10}
        />
        <ButtonEdit
          onPress={props.tutup}
          placeholder="Kembali"
          color="black"
          marginTop={10}
        />
      </View>
    </View>
  );
};

export default EditTransaksi;
