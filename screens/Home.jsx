import { StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Modal,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Profil from "../componenHome/Profil";
import { axiosInstance } from "../lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Menu } from "../componenHome/Menu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonDot3 from "../componenHome/dotThree";
import AddPelanggan from "../componenHome/addPelanggan";

const Home = () => {
  // Mengambil data dari API
  const [users, setUsers] = useState([]);
  const [transaksi, setTransaksi] = useState([]);
  const dispatch = useDispatch();
  // loading
  const [isLoading, setIsLoading] = useState(false);
  const fetchUsers = async () => {
    setIsLoading(true);
    const response = await axiosInstance.get("/users");
    const getTransaksi = await axiosInstance.get("/transaksi");
    setIsLoading(false);
    dispatch({
      type: "FETCH_USERS",
      payload: response.data,
    });
    // Mengurutkan berdasarkan abjad
    const sortedUsers = [...response.data].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setUsers(sortedUsers);
    setTransaksi(getTransaksi.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  // Search
  const searchData = useSelector((state) => state.search);
  const searchText = searchData.search;
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const filtered = users.filter(
      (user) => user.name.toLowerCase().includes(searchText.toLowerCase()) // Filter berdasarkan nama
    );
    setFilteredUsers(filtered); // Set hasil pencarian
  }, [searchText, users]);

  // Modal
  const [isVisible, setIsVisible] = useState(false);
  const logout = async () => {
    await AsyncStorage.removeItem("loggedInUser");
    dispatch({
      type: "LOGOUT",
    });
  };

  // Modal Add Phone
  const [isVisibleAdd, setIsVisibleAdd] = useState(false);

  // Jumlah Transaksi
  const jumlahTransaksi = (nama) => {
    let hitung = 0;
    for (i = 0; i < transaksi.length; i++) {
      const { name } = transaksi[i];
      if (name == nama) {
        hitung++;
      }
    }
    return hitung;
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar style="dark" />
      <Menu
        onPress={() => {
          setIsVisible(true);
        }}
      />
      <View style={styles.list}>
        <FlatList
          refreshing={isLoading}
          onRefresh={fetchUsers}
          data={filteredUsers}
          renderItem={({ item }) => {
            return (
              <Profil
                name={item.name}
                phone={item.noHP}
                jumlahTransaksi={jumlahTransaksi(item.name)}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal
        transparent={true}
        visible={isVisible}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <ButtonDot3
                onPress={() => {
                  logout();
                }}
                onPressAdd={() => {
                  setIsVisibleAdd(true);
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        visible={isVisibleAdd}
        animationType="fade"
        presentationStyle="overFullScreen">
        <AddPelanggan batal={() => setIsVisibleAdd(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
  },
  menu: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  list: {
    width: "100%",
    height: 720,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start", // Modal akan muncul di tengah layar
    alignItems: "flex-end",
    // backgroundColor: "rgba(0, 0, 0, 0.1)", // Membuat background transparan
    paddingRight: 40,
    paddingTop: 20,
  },
});

export default Home;
