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
import React, { useCallback, useEffect } from "react";
import Dashboardpic from "../assets/images/Dashboardpic2.png";
import Global from "../assets/styles/Global";
import content1 from "../assets/images/content1.png";
import content2 from "../assets/images/content2.png";
import content3 from "../assets/images/content3.jpg";
import content4 from "../assets/images/content4.png";
import content5 from "../assets/images/content5.jpg";
import content6 from "../assets/images/content6.webp";
import BottomDrawer from "../components/BottomDrawer";
import ProgressWidget from "../components/ProgressWidget";
import backgroundImg from "../assets/images/backgroundImg.png";
import * as Progress from "react-native-progress";

export default function FinancialLiteracy({ navigation }) {
  //import fonts
  const [progress, setProgress] = useState(0.55);
  const [currentAmount, setCurrentAmount] = useState();
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });
  const pressHandler = () => {
    navigation.navigate("ArticlePage");
  };
  const goalAmount = "200";
  const recentEbooks = [
    {
      source: content1,
      title: "De intelligente belegger",
      description: "a",
    },
    {
      source: content2,
      title: "I will teach you to be rich",
      description: "a",
    },
    {
      source: content3,
      title: "Financial Freedom",
      description: "a",
    },
    {
      source: content4,
      title: "Mantra of Financial Freedom",
      description: "a",
    },
    {
      source: content5,
      title: "How to speak money",
      description: "a",
    },
  ];

  const recentArticles = [
    {
      source: content5,
      title: "a",
      description: "a",
    },
    {
      source: content6,
      title: "a",
      description: "a",
    },
    {
      source: content4,
      title: "a",
      description: "a",
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
  ];
  const EbookHandler = () => {
    navigation.navigate("Ebooks");
  };
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function updateProgress(time) {
    await timeout(time);
    setProgress(0.56);
  }
  useEffect(() => {
    updateProgress(500);
  }, []);

  return (
    <View style={styles.FinancialLiteracy}>
      <Image style={styles.backgroundImage} source={backgroundImg} />
      <View style={styles.widgetView}>
        <Text style={styles.title}>Financial Literacy</Text>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContent}>Recent Trainings:</Text>
          <Text style={styles.widgetViewContent}>○ Assets vs Liabilities</Text>
          <Text style={styles.widgetViewContent}>○ Savings vs Investment</Text>
          <Text style={styles.widgetViewContent}>○ The art of Budgeting</Text>
          <Progress.Circle
            size={100}
            thickness={12}
            color={"#107070"}
            unfilledColor={"#eee"}
            borderWidth={0}
            strokeCap={"round"}
            endAngle={0.5}
            showsText={true}
            animated={true}
            progress={progress}
            style={{ position: "absolute", left: width / 2 }}
          />
        </View>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>E-Books</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={recentEbooks}
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
          <Text style={styles.widgetViewContentTitle}>Articles</Text>
          <TouchableOpacity onPress={pressHandler}>
            <Image style={styles.images} source={content6} />
          </TouchableOpacity>
        </View>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>Your Savings</Text>
          <Progress.Bar
            width={width * 0.78}
            thickness={12}
            height={height * 0.02}
            color={"#61CBB4"}
            unfilledColor={"#eee"}
            borderWidth={0}
            borderRadius={25}
            strokeCap={"round"}
            endAngle={0.5}
            showsText={true}
            animated={true}
            progress={progress}
            style={{}}
          />
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
    backgroundColor: "rgba(244, 255, 242, 1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "rgba(36, 118, 114, 1)",
    fontSize: width / 15,
    fontWeight: "bold",
    paddingLeft: width / 15,
  },
  widgetView: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: width / 1.1,
    height: height / 1.1,
    borderRadius: 35,
    bottom: getStatusBarHeight() - height / 15,
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    paddingTop: height / 50,
  },
  widgetViewContentTitle: {
    color: "#107070",
    fontSize: width / 20,
    fontWeight: "bold",
    marginBottom: height / 100,
  },
  widgetViewContent: {
    color: "#000000",
    fontSize: width / 25,
    marginRight: width / 15,
  },
  widgetViewContentContainer: {
    marginBottom: height / 50,
    marginLeft: width / 15,
  },
  images: {
    width: width / 4.5,
    height: height / 6.3,
    marginRight: width / 40,
  },
  flatlist: {
    width: width * 0.776,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
    width: width,
    height: height,
  },
});
