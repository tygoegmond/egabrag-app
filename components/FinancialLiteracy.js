//import react / react-native assets
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from "react-native";
import React, { useCallback, useState, useRef } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Dashboardpic from "../assets/images/Dashboardpic2.png";
import * as Progress from "react-native-progress";

//import expo assets

import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

// create onboarding component
const FinancialLiteracy = ({ recentTrainings, navigation }) => {
  //declare states
  const [progress, setProgress] = useState(0);

  //import fonts
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const pressHandler = () => {
    navigation.navigate("FinancialLiteracy");
  };
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  async function updateProgress(time) {
    await timeout(time);
    setProgress(0.5);
  }
  updateProgress(500);

  const recentlist = recentTrainings.map((recent) => {
    return (
      <Text key={recent} style={styles.profileInfo}>
        〇{recent}
      </Text>
    );
  });
  return (
    <TouchableOpacity onPress={pressHandler} style={styles.financialView}>
      <Text style={styles.title}>Financial Literacy</Text>
      <View style={styles.profileInfoContainer}>
        <Text style={styles.recent}>Recent Trainings:</Text>
        <View
          style={{
            position: "absolute",
            top: height * 0.01,
            marginTop: height * 0.01,
          }}
        >
          {recentlist}
        </View>
        <View
          style={{
            position: "absolute",
            // top: height * 0.019,
            right: -width * 0.05,
          }}
        >
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
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// local styles
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      container: {
        width: width / 10,
      },
      financialView: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: width / 1.18,
        borderRadius: 25,
        height: height / 5.8,
        bottom: height * 0.34,
        position: "absolute",
        justifyContent: "center",
        opacity: 0.8,
      },

      profileText: {
        color: "#fff",
        backgroundColor: "#61CBB4",
        padding: 15,
        paddingHorizontal: 30,
        borderRadius: 24,
        overflow: "hidden",
        fontWeight: "bold",
        flexWrap: "wrap",
      },
      textContainer: {
        width: width / 1.5,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        overflow: "hidden",
        left: width / 2.9,
        position: "absolute",
        top: getStatusBarHeight() + height / 11,
      },

      profileInfoContainer: {
        width: width / 1.5,
        left: width / 14,
        top: getStatusBarHeight() - height * 0.1,
      },
      author: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: height * 0.11,
        marginBottom: height / 120,
        position: "absolute",
        right: 0,
      },
      profileInfo: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        top: height * 0.03,

        position: "relative",
      },
      recent: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        top: height * 0.017,
        marginBottom: height / 120,
        position: "relative",
      },
      title: {
        color: "#107070",
        fontSize: 18,
        fontWeight: "bold",
        height: height * 0.15,
        left: width / 14,
        marginBottom: height / 120,
        position: "absolute",
      },
    },
    //--------------------------------------------------------android----------------------------------------------------------------
    android: {
      container: {
        width: width / 10,
      },
      financialView: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: width / 1.18,
        borderRadius: 25,
        height: height / 5.8,
        bottom: height * 0.34,
        position: "absolute",
        justifyContent: "center",
      },

      profileText: {
        color: "#fff",
        backgroundColor: "#61CBB4",
        padding: 15,
        paddingHorizontal: 30,
        borderRadius: 24,
        overflow: "hidden",
        fontWeight: "bold",
        flexWrap: "wrap",
      },
      textContainer: {
        width: width / 1.5,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        overflow: "hidden",
        left: width / 2.9,
        position: "absolute",
        top: getStatusBarHeight() + height / 11,
      },

      profileInfoContainer: {
        width: width / 1.5,
        left: width / 14,
        top: getStatusBarHeight() - height * 0.1,
      },
      author: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: height * 0.11,
        marginBottom: height / 120,
        position: "absolute",
        right: 0,
      },
      profileInfo: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
        top: height * 0.05,
        position: "relative",
      },
      recent: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        top: height * 0.04,
        marginBottom: height / 120,
        position: "relative",
      },
      title: {
        color: "#107070",
        fontSize: 18,
        fontWeight: "bold",
        height: height * 0.15,
        left: width / 14,
        marginBottom: height / 120,
        position: "absolute",
      },
    },
    //-----------------------------------------------------------default-----------------------------------------------------------------
    default: {
      container: {
        width: width / 10,
      },
      financialView: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: width / 1.18,
        borderRadius: 25,
        height: height / 5.8,
        bottom: height * 0.34,
        position: "absolute",
        justifyContent: "center",
        opacity: 0.8,
      },

      profileText: {
        color: "#fff",
        backgroundColor: "#61CBB4",
        padding: 15,
        paddingHorizontal: 30,
        borderRadius: 24,
        overflow: "hidden",
        fontWeight: "bold",
        flexWrap: "wrap",
      },
      textContainer: {
        width: width / 1.5,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        overflow: "hidden",
        left: width / 2.9,
        position: "absolute",
        top: getStatusBarHeight() + height / 11,
      },

      profileInfoContainer: {
        width: width / 1.5,
        left: width / 14,
        top: getStatusBarHeight() - height * 0.1,
      },
      author: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: height * 0.11,
        marginBottom: height / 120,
        position: "absolute",
        right: 0,
      },
      profileInfo: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        top: height * 0.03,

        position: "relative",
      },
      recent: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        top: height * 0.017,
        marginBottom: height / 120,
        position: "relative",
      },
      title: {
        color: "#107070",
        fontSize: 18,
        fontWeight: "bold",
        height: height * 0.15,
        left: width / 14,
        marginBottom: height / 120,
        position: "absolute",
      },
    },
  }),
});

export default FinancialLiteracy;
