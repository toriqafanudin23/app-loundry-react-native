import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useDispatch } from "react-redux";

const DateTimeCustom = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (event, selectedDate) => {
        onChange(event, selectedDate);
      },
      mode: "date", // bisa 'date' atau 'time'
      is24Hour: true, // gunakan format 24 jam
    });
  };

  const tanggalDipilih = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const kirimDispatch = (selectedDate) => {
    dispatch({ type: "TGL", payload: selectedDate });
  };

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate || date; // Pilih tanggal baru atau gunakan yang lama
      setDate(currentDate);
      kirimDispatch(currentDate); // Kirim ke dispatch
    }
  };

  return (
    <View style={{ width: "90%" }}>
      <TouchableOpacity onPress={showDatePicker}>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            alignItems: "center",
            padding: 14,
            borderRadius: 8,
            flexDirection: "row",
          }}>
          <Fontisto
            name="date"
            size={16}
            color="black"
            style={{ paddingLeft: 0, paddingRight: 14 }}
          />
          <Text style={{ fontSize: 16 }}>{tanggalDipilih}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DateTimeCustom;
