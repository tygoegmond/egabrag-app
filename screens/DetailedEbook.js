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
import capture from "../assets/images/capture.png";

export default function DetailedEbook({ navigation }) {
  const PdfPageHandler = () => {
    navigation.navigate("PdfPage");
  };

  return (
    <View style={styles.detailedEbook}>
      <Image source={backgroundImg} style={styles.backgroundImg} />
      <View>
        <Image style={styles.image} source={capture} />
      </View>
      <View style={styles.boxNextToImage}>
        <Text style={styles.title}>Money habits guide for 30 days</Text>
        <Text style={styles.author}>My education lifestyle</Text>
        <Text style={styles.genre}>Finance</Text>
      </View>
      <TouchableOpacity style={styles.readButton} onPress={PdfPageHandler}>
        <Text style={styles.readButtonText}>Read</Text>
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.descriptionText}>
          When it comes to money, you really can't take things one day at a
          time. You must look ahead to the future, set financial goals, and then
          create a plan to reach those goals. Once that is done, you start
          meeting those goals - one day and step at a time.
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
    width: width / 3,
    height: height / 4.9,
    left: width / 12,
    top: height / 14,
  },
  boxNextToImage: {
    width: width / 2.15,
    height: height / 4.93,
    left: width / 2.25,
    top: height / 14,
    bottom: height / 1.333,
    position: "absolute",
  },
  title: {
    fontSize: width / 22,
  },
  author: {
    fontSize: width / 25,
    color: "#107070",
  },
  genre: {
    fontSize: width / 25,
  },
  description: {
    width: width / 1.2,
    left: width / 12,
    top: height / 7,
  },
  readButton: {
    backgroundColor: "#61CBB4",
    width: width / 1.2,
    height: height / 18,
    borderRadius: 10,
    padding: 10,
    bottom: getStatusBarHeight(),
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    top: height / 3.5,
  },
  readButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 0,
  },
  descriptionTitle: {
    fontSize: width / 20,
  },
  descriptionText: {
    fontSize: width / 27,
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
