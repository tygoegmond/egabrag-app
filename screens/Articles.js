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

export default function Articles({ navigation }) {
  //import fonts
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

  const articles = [
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
  ];

  return (
    <View style={styles.Articles}>
      <Text style={styles.title}>Articles</Text>
      <View style={styles.widgetView}>
        <View style={{ marginLeft: 22 }}>
          <View>
            <Text>categories bla bla bla bla bla</Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={articles}
              style={styles.flatlist}
              renderItem={({ item }) => (
                <View>
                  {/* singular on boarding screen word gerendered */}
                  <Image source={item.source} style={styles.images} />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  Articles: {
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
    marginRight: width / 40,
  },
});
