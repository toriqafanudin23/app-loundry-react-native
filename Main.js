import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TambahPelanggan } from "./screens/TambahPelanggan";
import BuatTransaksi from "./screens/BuatTransaksi";
import RiwayatTransaksiPelanggan from "./screens/RiwayatTransaksiPelanggan";
import Home from "./screens/Home";
import EditTransaksi from "./EditTransaksi/editTransaksi";

const Tab = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Transaksi" component={RiwayatTransaksiPelanggan} />
        <Tab.Screen name="Tambah Pelanggan" component={TambahPelanggan} />
        <Tab.Screen name="Transaksi Baru" component={BuatTransaksi} />
        <Tab.Screen name="Edit Transaksi" component={EditTransaksi} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Main;
