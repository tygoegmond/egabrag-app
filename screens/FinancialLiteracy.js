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
import { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Swiper from "react-native-swiper";
import React, { useCallback } from "react";
import Dashboardpic from "../assets/images/Dashboardpic2.png";
import Global from "../assets/styles/Global";
import content1 from "../assets/images/content1.png";
import content2 from "../assets/images/content2.png";
import content3 from "../assets/images/content3.jpg";
import content4 from "../assets/images/content4.png";
import content5 from "../assets/images/content5.jpg";
import content6 from "../assets/images/content6.webp";
import BottomDrawer from "../components/BottomDrawer";

export default function FinancialLiteracy({ navigation }) {
  //import fonts
  const [currentAmount, setCurrentAmount] = useState();
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

  const goalAmount = "100";
  const data = [
    {
      source: content1,
      title: "Kipsate",
      description: "Ebook over kipsa",
    },
    {
      source: content2,
      title: "a",
      description: "a",
    },
    {
      source: content3,
      title: "a",
      description: "a",
    },
    {
      source: content4,
      title: "a",
      description: "a",
    },
    {
      source: content5,
      title: "a",
      description: "a",
    },
  ];

  return (
    <View style={styles.FinancialLiteracy}>
      <Text style={styles.title}>Financial Literacy</Text>
      <View style={styles.widgetView}>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>Recent Trainings</Text>
          <Text style={styles.widgetViewContent}>Assets vs Liabilities</Text>
          <Text style={styles.widgetViewContent}>Savings vs Investment</Text>
          <Text style={styles.widgetViewContent}>The art of Budgeting</Text>
        </View>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>E-Books</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            style={styles.flatlist}
            renderItem={({ item }) => (
              <View style={{ backrgoundColor: "red" }}>
                {/* singular on boarding screen word gerendered */}
                <Image source={item.source} style={styles.images} />
              </View>
            )}
          />
        </View>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>Articles</Text>
          <Image style={styles.images} source={content6} />
        </View>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>Your Savings</Text>
          <View
            style={[
              {
                flexDirection: "row",
                zIndex: 10,
                height: 100,
              },
              styles.widgetViewContent,
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  justifyContent: "flex-start",
                  right: 0,
                  position: "absolute",
                  fontWeight: "bold",
                }}
              >
                €{currentAmount}
              </Text>
              <Text style={{ justifyContent: "flex-end" }}>€{goalAmount}</Text>
            </View>
          </View>
        </View>
      </View>
      <BottomDrawer navigation={navigation} />
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
    top: getStatusBarHeight() + height / 18,
    left: width / 11.5,
    position: "absolute",
  },
  widgetView: {
    backgroundColor: "#fff",
    width: width / 1.1,
    height: height / 1.35,
    borderRadius: 25,
    bottom: getStatusBarHeight() - 70,
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    paddingTop: 16,
  },
  widgetViewContentTitle: {
    color: "#52A4D2",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  widgetViewContent: {
    color: "#000000",
    fontSize: 15,
    marginRight: 16,
  },
  widgetViewContentContainer: {
    marginBottom: 32,
    marginLeft: 22,
  },
  images: {
    width: width / 5,
    height: height / 7,
    marginRight: width / 40,
  },
  flatlist: {
    marginRight: width / 10,
    width: width * 0.8,
  },
});
