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
import { ScrollView } from "react-native-gesture-handler";

export default function FinancialLiteracy({ navigation }) {
  //import fonts
  const [currentAmount, setCurrentAmount] = useState();
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

  const popular = [
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

  const finance = [
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
  ];

  const mindfulness = [
    {
      source: content3,
      title: "c",
    },
    {
      source: content4,
      title: "d",
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
      source: content3,
      title: "c",
    },
    {
      source: content4,
      title: "d",
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
      source: content3,
      title: "c",
    },
    {
      source: content4,
      title: "d",
    },
  ];

  const education = [
    {
      source: content5,
      title: "e",
    },
    {
      source: content6,
      title: "f",
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
      source: content5,
      title: "e",
    },
    {
      source: content6,
      title: "f",
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
      source: content5,
      title: "e",
    },
    {
      source: content6,
      title: "f",
    },
  ];

  return (
    <View style={styles.AllEbooks}>
      <View style={styles.widgetViewContentContainer}>
        <Text style={styles.widgetViewContentTitle}>Popular</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popular}
          style={styles.flatlist}
          renderItem={({ item }) => (
            <View>
              {/* singular on boarding screen word gerendered */}
              <Image source={item.source} style={styles.images} />
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.widgetViewContentContainer}>
        <Text style={styles.widgetViewContentTitle}>Finance</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={finance}
          style={styles.flatlist}
          renderItem={({ item }) => (
            <View>
              {/* singular on boarding screen word gerendered */}
              <Image source={item.source} style={styles.images} />
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.widgetViewContentContainer}>
        <Text style={styles.widgetViewContentTitle}>Mindfulness</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={mindfulness}
          style={styles.flatlist}
          renderItem={({ item }) => (
            <View>
              {/* singular on boarding screen word gerendered */}
              <Image source={item.source} style={styles.images} />
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.widgetViewContentContainer}>
        <Text style={styles.widgetViewContentTitle}>Education</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={education}
          style={styles.flatlist}
          renderItem={({ item }) => (
            <View>
              {/* singular on boarding screen word gerendered */}
              <Image source={item.source} style={styles.images} />
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  AllEbooks: {
    color: "#107070",
    backgroundColor: "rgba(123, 255, 157, 0.1)",
    width: width / 1,
    height: height / 1,
    flex: 1,
    paddingTop: 32,
  },
  title: {
    color: "#107070",
    fontSize: 32,
    fontWeight: "bold",
    top: getStatusBarHeight() + height * -0.1,
    left: width / 11.5,
    position: "absolute",
  },
  widgetViewContentTitle: {
    color: "rgba(36, 118, 114, 1)",
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
    marginBottom: 18,
    marginLeft: width / 20,
  },
  images: {
    width: width / 5,
    height: height / 7,
    marginRight: width / 40,
  },
  flatlist: {
    width: width * 0.9,
  },
  profileView: {
    backgroundColor: "#107070",
    width: width / 1.18,
    borderRadius: 25,
    height: height / 5.6,
    bottom: getStatusBarHeight() + height / 16,
    position: "absolute",
    justifyContent: "center",
  },
});
