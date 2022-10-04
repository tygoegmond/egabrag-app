import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Pressable,
  TextInput,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Swiper from "react-native-swiper";
import React, { useCallback } from "react";
import Dashboardpic from "../assets/images/Dashboardpic2.png";
import Global from "../assets/styles/Global";

export default function FinancialLiteracy({ navigation }) {
  //import fonts
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

  return (
    <View style={styles.FinancialLiteracy}>
      <Text style={styles.title}>Financial Literacy</Text>
      <View style={styles.widgetView}></View>
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  FinancialLiteracy: {
    color: "#107070",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D4FFF6",
  },
  title: {
    color: "#107070",
    fontSize: 30,
    fontWeight: "bold",
    top: getStatusBarHeight() + height / 150,
    left: width / 11.5,
    position: "absolute",
  },
  widgetView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: width / 1.2,
    height: height / 1.3,
    borderRadius: 25,
    bottom: getStatusBarHeight() - 60,
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
  },
});
