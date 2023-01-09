//importing react / react native assets
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import DateTimePicker from "@react-native-community/datetimepicker";
import Global from "../assets/styles/Global";
const DateSpinner = ({date, setDate}) => {

  return (
    <View style={styles.modal}>
      <DateTimePicker
        display="spinner"
        style={styles.inlinedate}
        themeVariant="light"
        value={date}
        mode="date"
        onChange={(e) => {
          setDate(new Date(e.nativeEvent.timestamp));
        }}
      />
    </View>
  );
};
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
    inlinedate: {
        position: "absolute",
        height: height * 0.3,
        width: width *0.8,
        borderRadius: 8,
        color: "#fff",
        fontSize: 26,
      },
      modal: {
        position: "absolute",
        height: height * 0.3,
        zIndex: 1231,
        bottom: getStatusBarHeight() + height * 0.225,
        width: width * 0.85,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 8,
        color: "#fff",
        fontSize: 26,
        backgroundColor: "#fff",
      }
});

export default DateSpinner;
