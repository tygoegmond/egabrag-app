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
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Swiper from "react-native-swiper";
import React, { useCallback } from "react";
import Dashboardpic from "../assets/images/Dashboardpic2.png";
import Global from "../assets/styles/Global";
import backgroundImg from "../assets/images/backgroundImg.png";
import content1 from "../assets/images/content1.png";

export default function DetailedEbook({ navigation }) {
  const PdfPageHandler = () => {
    navigation.navigate("PdfPage");
  };

  return (
    <View style={styles.detailedEbook}>
      <Image source={backgroundImg} style={styles.backgroundImg} />
      <View>
        <Image style={styles.image} source={content1} />
      </View>
      <View style={styles.boxNextToImage}>
        <Text style={styles.title}>De intelligente belegger</Text>
      </View>
      <TouchableOpacity style={styles.readButton} onPress={PdfPageHandler}>
        <Text style={styles.readButtonText}>Read</Text>
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </View>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  detailedEbook: {
    width: width / 1,
    height: height / 1,
    flex: 1,
  },
  image: {
    width: width / 3.5,
    height: height / 4.9,
    position: "relative",
    left: width / 22,
    top: height / 22,
  },
  boxNextToImage: {
    width: width / 1.7,
    height: height / 4.93,
    left: width / 2.8,
    bottom: height / 1.385,
    position: "absolute",
    },
    title: {
      fontSize: 20,
    },
  description: {
    width: width / 1.1,
    left: width / 22,
    top: height / 20,
  },
  readButton: {
    backgroundColor: "#61CBB4",
    width: width / 1.1,
    height: height / 18,
    borderRadius: 10,
    padding: 10,
    bottom: getStatusBarHeight(),
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    top: height / 3.85,
  },
  readButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 0,
  },
  descriptionText: {
    fontSize: 16,
    top: height / 15,
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
