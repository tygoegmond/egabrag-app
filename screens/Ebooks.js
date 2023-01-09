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
import backgroundImg from "../assets/images/backgroundImg.png";
import { ScrollView } from "react-native-gesture-handler";

export default function Ebooks({ navigation }) {
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
    {
      source: content1,
      title: "g",
    },
    {
      source: content2,
      title: "h",
    },
    {
      source: content3,
      title: "i",
    },
    {
      source: content4,
      title: "j",
    },
    {
      source: content5,
      title: "k",
    },
    {
      source: content6,
      title: "l",
    },
  ];
  // moet fixen dat de titel niet achter de image komt
  return (
    <View style={styles.ebooks}>
      <Image source={backgroundImg} style={styles.backgroundImg} />
      <ScrollView>
        <Text style={[styles.title]}>E-Books</Text>
        <View>
          <ContentGrid data={Ebooks} navigation={navigation} />
        </View>
      </ScrollView>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  ebooks: {
    width: width / 1,
    height: height / 1,
    flex: 1,
  },
  title: {
    color: "#107070",
    fontSize: 32,
    fontWeight: "bold",
    top: getStatusBarHeight() + height / 32,
    left: width / 11.5,
    display: "flex",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
    width: width,
    height: height,
    opacity: 0.5,
  },
});
