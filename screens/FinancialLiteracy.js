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
import content1 from "../assets/images/content1.png";

export default function FinancialLiteracy({ navigation }) {
  //import fonts
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

  return (
    <View style={styles.FinancialLiteracy}>
      <Text style={styles.title}>Financial Literacy</Text>
      <View style={styles.widgetView}>
        <Text style={styles.widgetViewContentTitle}>Recent Trainings:</Text>
        <Text style={styles.widgetViewContent}>
          Assets vs Liabilities{"\n"}Savings vs Investment{"\n"}The art of
          Budgeting
        </Text>
        <Text style={styles.widgetViewContentTitle}>E-Books</Text>
        <Image style={styles.widgetViewContent} source={content1} />
      </View>
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
    fontSize: 32,
    fontWeight: "bold",
    top: getStatusBarHeight() + height / 16,
    left: width / 11.5,
    position: "absolute",
  },
  widgetView: {
    backgroundColor: "#fff",
    width: width / 1.2,
    height: height / 1.5,
    borderRadius: 25,
    bottom: getStatusBarHeight() - 60,
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    paddingTop: 14,
  },
  widgetViewContentTitle: {
    color: "#52A4D2",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    paddingLeft: 16,
  },
  widgetViewContent: {
    color: "#000000",
    fontSize: 15,
    paddingLeft: 16,
    paddingBottom: 32,
  },
});
