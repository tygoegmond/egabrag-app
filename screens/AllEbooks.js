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
      popularity: "1",
    },
    {
      source: content2,
      title: "b",
      popularity: "2",
    },
    {
      source: content3,
      title: "c",
      popularity: "3",
    },
    {
      source: content4,
      title: "d",
      popularity: "4",
    },
    {
      source: content5,
      title: "e",
      popularity: "5",
    },
    {
      source: content6,
      title: "f",
      popularity: "6",
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
      <ScrollView>
        <Text style={styles.title}>E-Books</Text>
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
                <Text style={styles.popularityNumber}>{item.popularity}</Text>
                <Image source={item.source} style={styles.imagesPopular} />
                <Text style={{ left: width / 10 }}>{item.title}</Text>
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
      </ScrollView>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  AllEbooks: {
    color: "#107070",
    backgroundColor: "rgba(244, 255, 242, 0.8)",
    width: width / 1,
    height: height / 1,
    flex: 1,
    paddingTop: height / 20,
    paddingBottom: height / 10,
  },
  title: {
    color: "rgba(36, 118, 114, 0.25)",
    fontSize: width / 10,
    fontWeight: "bold",
    paddingLeft: width / 20,
  },
  widgetViewContentTitle: {
    color: "rgba(36, 118, 114, 1)",
    fontSize: width / 18,
    fontWeight: "bold",
    marginBottom: height / 100,
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
  imagesPopular: {
    width: width / 5,
    height: height / 7,
    marginRight: width / 7,
    left: width / 10,
  },
  flatlist: {
    width: width * 0.9,
  },
  popularityNumber: {
    color: "rgba(36, 118, 114, 0.25)",
    fontSize: width / 4,
    fontWeight: "bold",
    position: "absolute",
  },
});
