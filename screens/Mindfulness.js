import React from "react";
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
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Swiper from "react-native-swiper";
import { useCallback } from "react";
import Dashboardpic from "../assets/images/Dashboardpic2.png";
import Global from "../assets/styles/Global";
import content7 from "../assets/images/content7.jpg";
import content8 from "../assets/images/content8.jpg";
import content9 from "../assets/images/content9.jpg";
import content10 from "../assets/images/content10.jpg";
import content11 from "../assets/images/content11.jpg";
import yoga1 from "../assets/images/yoga1.jpg";
import yoga2 from "../assets/images/yoga2.jpg";
import yoga3 from "../assets/images/yoga3.jpg";
import yoga4 from "../assets/images/yoga4.jpg";
import yoga5 from "../assets/images/yoga5.jpg";
import opdracht1 from "../assets/images/mindfulnessopdracht1.png";
import opdracht2 from "../assets/images/mindfulnessopdracht2.png";
import BottomDrawer from "../components/BottomDrawer";
import backgroundImg from "../assets/images/backgroundImg.png";
import lotus from "../assets/images/lotus.png";

export default function Mindfulness({ navigation }) {
  //import fonts
  const [currentAmount, setCurrentAmount] = useState();
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

  const quote = "Fear kills more dreams than failure will ever be able to.";
  const dataEbooks = [
    {
      source: content7,
      title: "Kipsate",
      description: "Ebook over kipsa",
    },
    {
      source: content8,
      title: "a",
      description: "a",
    },
    {
      source: content9,
      title: "a",
      description: "a",
    },
    {
      source: content10,
      title: "a",
      description: "a",
    },
    {
      source: content11,
      title: "a",
      description: "a",
    },
  ];
  const dataYoga = [
    {
      source: yoga1,
      title: "a",
      description: "a",
    },
    {
      source: yoga2,
      title: "a",
      description: "a",
    },
    {
      source: yoga3,
      title: "a",
      description: "a",
    },
    {
      source: yoga4,
      title: "a",
      description: "a",
    },
    {
      source: yoga5,
      title: "a",
      description: "a",
    },
  ];
  const dataMindfulnessOpdrachten = [
    {
      source: opdracht1,
      title: "a",
      description: "a",
    },
    {
      source: opdracht2,
      title: "a",
      description: "a",
    },
  ];
  return (
    <View style={styles.Mindfulness}>
      <Image source={backgroundImg} style={styles.backgroundImg} />
      <View style={styles.widgetView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollview}
        >
          <View style={styles.widgetViewContentContainer}>
            <Text style={styles.widgetViewContentTitle}>Mindfulness</Text>
            <Text style={styles.widgetViewContentTitle}>Daily Quote</Text>
            <Image source={lotus} style={styles.lotus} />
            <Text style={styles.widgetViewContent}>{quote}</Text>
          </View>
          <View style={styles.widgetViewContentContainer}>
            <Text style={styles.widgetViewContentTitle}>E-Books</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={dataEbooks}
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
            <Text style={styles.widgetViewContentTitle}>Yoga moves</Text>
            {/*https://dailyburn.com/life/fitness/beginner-yoga-poses-positions*/}
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={dataYoga}
              style={styles.flatlist}
              renderItem={({ item }) => (
                <View style={{ backrgoundColor: "red" }}>
                  {/* singular on boarding screen word gerendered */}
                  <Image source={item.source} style={styles.imagesYoga} />
                </View>
              )}
            />
          </View>
          <View
            style={[
              styles.widgetViewContentContainer,
              { marginBottom: height * 0.15 },
            ]}
          >
            <Text style={styles.widgetViewContentTitle}>Opdrachten</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={dataMindfulnessOpdrachten}
              style={styles.flatlist}
              renderItem={({ item }) => (
                <View style={{ backrgoundColor: "red" }}>
                  {/* singular on boarding screen word gerendered */}
                  <Image source={item.source} style={styles.images} />
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      Mindfulness: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundImg: backgroundImg,
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
        height: height / 1.1,
        borderRadius: 25,
        bottom: getStatusBarHeight() - 70,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
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
        // marginRight: 16,
      },
      widgetViewContentContainer: {
        marginBottom: 32,
        // marginLeft: 22,
      },
      images: {
        width: width / 5,
        height: height / 7,
        marginRight: width / 40,
      },
      imagesYoga: {
        width: width / 2.5,
        height: height / 7,
        marginRight: width / 40,
      },
      flatlist: {
        marginRight: width / 10,
        width: width * 0.8,
      },
      scrollview: {
        backgroundColor: "#fff",
      },
    },
    //---------------------------------------------------------android-----------------------------------------------------------
    android: {
      Mindfulness: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundImg: backgroundImg,
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
        // backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: width / 1.1,
        height: height / 1.1,
        borderRadius: 25,
        bottom: getStatusBarHeight() - 70,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        paddingTop: 20,
        paddingBottom: 20,
      },
      widgetViewContentTitle: {
        color: "#107070",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
      },
      widgetViewContent: {
        color: "#000000",
        fontSize: 15,
        // marginRight: 16,
        alignSelf: "center",
      },
      widgetViewContentContainer: {
        marginBottom: 32,
        // marginLeft: 22,
      },
      images: {
        width: width / 5,
        height: height / 7,
        marginRight: width / 40,
      },
      imagesYoga: {
        width: width / 2.5,
        height: height / 7,
        marginRight: width / 40,
      },
      flatlist: {
        marginRight: width / 10,
        width: width * 0.8,
      },

      backgroundImg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        position: "absolute",
        zIndex: 0,
        width: width,
        height: height,
      },
      lotus: {
        width: width / 3,
        height: height / 7,
        position: "absolute",
        alignSelf: "center",
      },
      scrollview: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: width * 0.05,
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,
      },
    },
    //---------------------------------------------------------------------default----------------------------------------------------
    default: {
      Mindfulness: {
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
        paddingTop: 20,
        paddingBottom: 20,
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
        // marginRight: 16,
      },
      widgetViewContentContainer: {
        marginBottom: 32,
        // marginLeft: 22,
      },
      images: {
        width: width / 5,
        height: height / 7,
        marginRight: width / 40,
      },
      imagesYoga: {
        width: width / 2.5,
        height: height / 7,
        marginRight: width / 40,
      },
      flatlist: {
        marginRight: width / 10,
        width: width * 0.8,
      },
      scrollview: {
        backgroundColor: "#fff",
      },
    },
  }),
});
