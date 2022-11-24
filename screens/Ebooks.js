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
import ContentGrid from "../components/ContentGrid";
import BottomDrawer from "../components/BottomDrawer";

export default function Ebooks({ navigation }) {
  //import fonts

  const Ebooks = [
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
    {
      source: content3,
      title: "c",
    },
    {
      source: content4,
      title: "d",
    },
    {
      source: content5,
      title: "e",
    },
    {
      source: content6,
      title: "f",
    },
  ];

  return (
    <View style={styles.ebooks}>
      <Text style={styles.title}>E-Books</Text>
      <View style={styles.widgetView}>
        <View
          style={{
            backgroundColor: "red",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems }}>
            <Text>Categories bla bla bla bla bla</Text>
          </View>
          <View>
            <ContentGrid data={Ebooks} navigation={navigation} />
          </View>
        </View>
      </View>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  ebooks: {
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
    top: getStatusBarHeight() + height / 32,
    left: width / 11.5,
    position: "absolute",
  },
  widgetView: {
    backgroundColor: "#fff",
    width: width / 1,
    height: height / 1.25,
    borderRadius: 35,
    bottom: getStatusBarHeight() - 70,
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    paddingTop: 16,
  },
  images: {
    width: width / 5,
    height: height / 7,
  },
});
