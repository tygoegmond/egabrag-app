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
} from "react-native";
import React, { useCallback, useState, useRef } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";

//import expo assets

import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

// create onboarding component
const Onboarding = ({ title, subtext, image, first, handleNext }) => {
  //declare states
  
  const [dotColor, setDotColor] = useState("#fff");
  const [lightMode, setLightMode] = useState(true);
  
  //declare refs

  const scrollX = useRef(new Animated.Value(0)).current;

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

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={first ? styles.custom : styles.text1}>{title}</Text>
      <Text style={first ? styles.custom2 : styles.text2}>{subtext}</Text>
    </View>
  );
};

// local styles
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    zIndex: 0,
    width: width,
    height: height,
  },
  text1: {
    color: "#61CBB4",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "left",
    padding: 0,
    marginLeft: width / 13,
    borderRadius: 10,
    bottom: getStatusBarHeight() + height / 3.9,
    position: "absolute",
  },
  custom: {
    color: "#61CBB4",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "left",
    padding: 0,
    marginLeft: 25,
    borderRadius: 10,
    top: getStatusBarHeight() + height / 20,
    position: "absolute",
  },
  custom2: {
    color: "#61CBB4",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "left",
    padding: 0,
    marginLeft: 25,
    borderRadius: 10,
    top: getStatusBarHeight() + 75,
    position: "absolute",
  },
  text2: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    padding: 0,
    marginLeft: 30,
    borderRadius: 10,
    bottom: getStatusBarHeight() + 170,
    position: "absolute",
  },
  slider: {
    width: 40,
    height: 8,
    borderRadius: 10,
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    left: width / 2 - 40,
    position: "absolute",
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "black",
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    right: width / 2 - 20,
    position: "absolute",
  },
  dots2: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "black",
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    right: width / 2 - 40,
    position: "absolute",
  },
  dots1D: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "white",
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    right: width / 2 - 20,
    position: "absolute",
  },
  dots2D: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "white",
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    right: width / 2 - 40,
    position: "absolute",
  },
  nav: {
    position: "absolute",
    bottom: 0,
    width: width,
  },
  button: {
    backgroundColor: "#61CBB4",
    width: width / 1.2,
    height: height / 14,
    borderRadius: 10,
    padding: 10,
    bottom: getStatusBarHeight(),
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 0,
  },
});

export default Onboarding;
