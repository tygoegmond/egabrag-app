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
  import Dashboardpic from "../assets/images/Dashboardpic2.png";
  //import expo assets
  
  import { LinearGradient } from "expo-linear-gradient";
  import { useFonts } from "expo-font";
  
  // create onboarding component
  const MindfulNessWidget = ({ quote, author }) => {
    //declare states
  
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
      console.log("hi")
    }
    return (
   
        <TouchableOpacity onPress={pressHandler} style={styles.profileView}>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.profileInfo}>Mindfulness</Text>
         
            <Text style={styles.profileInfo}>{quote}</Text>
            <Text style={styles.author}>-{author}</Text>
          </View>
        </TouchableOpacity>
    
    );
  };
  
  // local styles
  const { height, width } = Dimensions.get("screen");
  const styles = StyleSheet.create({
    container: {
      width: width / 10,
    },
    image: {
      
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
    buttoniguess: {
      backgroundColor: "red",
      width: width / 2,
      height: height / 10,
      justifyContent: "center",
      textAlign: "center",
    },
  
    container: {
      flex: 1,
      backgroundColor: "#eee",
      alignItems: "center",
      justifyContent: "center",
    },
    imgback2: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      position: "absolute",
      zIndex: 0,
      width: width,
      height: height,
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      bottom: getStatusBarHeight() + 120,
      position: "absolute",
      fontFamily: "great-escape",
    },
    dashboard: {
      color: "#107070",
      fontSize: 30,
      fontWeight: "bold",
      top: getStatusBarHeight() + height / 150,
      left: width / 11.5,
      position: "absolute",
    },
    profileView: {
      backgroundColor: "white",
      width: width / 1.18,
      borderRadius: 25,
      height: height / 7.6,
      bottom: getStatusBarHeight() + height / 2.32,
      position: "absolute",
      justifyContent: "center",
    },
    profilePic: {
      width: width / 4,
      height: height / 9,
      top: getStatusBarHeight() - height / 9,
      left: width / 16,
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
    name: {
      color: "#61CBB4",
      fontSize: 25,
      fontWeight: "bold",
      top: getStatusBarHeight() + height * 0.0005,
      left: width / 11,
      position: "absolute",
      //wrap text
    },
    profileInfoContainer: {
      width: width / 1.5,
      left: width / 14,
      top: getStatusBarHeight() - height * 0.08,
    },
    author:{
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: height * 0.11,
        marginBottom: height / 120,
        position: "absolute",
        right: 0
        
    },
    profileInfo: {
      color: "#107070",
      fontSize: 16,
      fontWeight: "bold",
      top: height * 0.03,
      marginBottom: height / 120,
      position: "relative",
    },
  });
  
  export default MindfulNessWidget;
  