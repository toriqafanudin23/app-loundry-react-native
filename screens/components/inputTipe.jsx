import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const InputTipe = () => {
  const [searchQueryName, setSearchQueryName] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const dispatch = useDispatch();

  let nama = ["Setrika", "Dry Clean"];

  const filteredItem = nama.filter((name) =>
    name.toLowerCase().includes(searchQueryName.toLowerCase())
  );

  useEffect(() => {
    // Dispatch action hanya saat searchQueryName berubah
    if (selectedName) {
      dispatch({ type: "ADDTIPE", payload: selectedName });
    }
  }, [selectedName, dispatch]);

  return (
    <View style={styles.viewInputNama}>
      <TextInput
        placeholder="Pilih Paket Laundry: Setrika or Dry Clean"
        style={styles.inputText}
        value={selectedName || searchQueryName}
        onChangeText={(text) => {
          setSearchQueryName(text);
          setSelectedName("");
        }}
      />
      {searchQueryName && !selectedName && (
        <FlatList
          data={filteredItem}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedName(item);
                setSearchQueryName("");
              }}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.autocompleteContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    color: "gray",
  },
  inputText: {
    height: 50,
    width: "94%",
    paddingHorizontal: 20,
    borderColor: "gray",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
  },
  autocompleteContainer: {
    width: "94%",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    height: 150,
  },
  viewInputNama: {
    maxHeight: 150,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
