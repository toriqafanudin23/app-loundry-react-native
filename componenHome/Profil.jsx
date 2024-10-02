import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";

const Profil = (props) => {
  const name = props.name;
  const phone = props.phone;
  const jumlahTransaksi = props.jumlahTransaksi;

  // LihatTransaksi
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const KirimData = (nameSearch, phoneSearch) => {
    dispatch({ type: "PELANGGANNAME", payload: nameSearch });
    dispatch({ type: "PELANGGANPHONE", payload: phoneSearch });
    navigation.navigate("Transaksi");
  };
  const LihatTransaksi = () => {
    KirimData(props.name, props.phone);
  };
  let notif = "";
  if (jumlahTransaksi == 0) {
    notif = "#ffffff";
  } else {
    notif = "#32cd32";
  }
  return (
    <View
      style={{
        width: "100%",
        paddingRight: 20,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={LihatTransaksi}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 2,
          }}>
          <MaterialIcons name="account-circle" size={50} color="#ff7f50" />
        </View>
        <View
          style={{
            justifyContent: "center",
            borderColor: "#ffe4e1",
            flex: 8,
            padding: 8,
          }}>
          <Text style={{ fontSize: 16 }}>{name}</Text>
          <Text style={{ fontSize: 13, color: "grey" }}>{phone}</Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "flex-end",
          }}>
          <View
            style={{
              justifyContent: "center",
              height: 18,
              width: 18,
              backgroundColor: notif,
              alignItems: "center",
              borderRadius: 10,
            }}>
            <Text style={{ color: "white", fontSize: 11 }}>
              {jumlahTransaksi}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profil;
