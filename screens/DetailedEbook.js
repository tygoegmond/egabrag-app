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
// image cut off en idk why
export default function DetailedEbook({ navigation }) {
  return (
    <View style={styles.detailedEbook}>
      <Image source={backgroundImg} style={styles.backgroundImg} />
      <ScrollView>
        <View>
          <Image style={styles.image} source={content1} />
        </View>
      </ScrollView>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  detailedEbook: {
    width: width / 1,
    height: height / 1,
  },
  image: {
    top: height / 10,
  },
  backgroundImg: {
    resizeMode: "contain",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
    width: width,
    height: height,
    opacity: 0.5,
  },
});
