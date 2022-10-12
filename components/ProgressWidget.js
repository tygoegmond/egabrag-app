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
  import * as Progress from "react-native-progress";
  
  //import expo assets
  
  import { LinearGradient } from "expo-linear-gradient";
  import { useFonts } from "expo-font";
  
  // create onboarding component
  const ProgressWidget = ({ goalTitle, startAmount, endAmount, amount }) => {
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
      console.log("hi");
    };
    function timeout(delay) {
      return new Promise((res) => setTimeout(res, delay));
    }
    async function updateProgress(time) {
      await timeout(time);
      setProgress(amount / endAmount);
    }
    updateProgress(500);
  
   
    return (
      <TouchableOpacity onPress={pressHandler} style={styles.profileView}>
        <Text style={styles.title}>Progress towards:</Text>
        <View style={styles.textContainer}>
          <Text style={styles.profileText}>Goals</Text>
        </View>
        <View style={styles.profileInfoContainer}>
            
          <Text style={styles.recent}>{goalTitle}</Text>
          <View
            style={{
              position: "absolute",
              top: height * 0.01,
              marginTop: height * 0.01,
            }}
          >
          
          </View>
          <View
            style={{
              position: "absolute",
              top: height * 0.05,
             
            }}
          >
            <Progress.Bar
              width={width * 0.7}
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
            />
          </View>
          <Text style={styles.start}>€{amount}</Text>
          <Text style={styles.end}>€{endAmount}</Text>
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
    profileView: {
      backgroundColor: "#107070",
      width: width / 1.18,
      borderRadius: 25,
      height: height / 5.6,
      bottom: getStatusBarHeight() + height / 16,
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
      fontSize: 14,
      fontWeight: "bold",
      top: height * 0.03,
  
      position: "relative",
    },
    recent: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
      top: height * 0.012,
      
      position: "absolute",
    },
    title: {
      color: "#61CBB4",
      fontSize: 18,
      fontWeight: "bold",
      height: height * 0.15,
      left: width / 14,
      top: height * 0.02,   
      marginBottom: height / 120,
      position: "absolute",
    },
    start: {
        color: "#fff",
        fontSize: 18,
        top: height * 0.07,
        fontWeight: "bold",
    },
    end: {
        color: "#fff",
        fontSize: 18,
        top: height * 0.07,
        fontWeight: "bold",
        right: -width * 0.02,
        position: "absolute",
    },
  });
  
  export default ProgressWidget;
  