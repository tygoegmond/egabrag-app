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
import pointsIcon from "../assets/images/pointsIcon.png";
//import expo assets

import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

// create onboarding component
const ProfileInfo = ({ profilePic, user, navigation }) => {
  //declare states

  const [dotColor, setDotColor] = useState("#fff");
  const [lightMode, setLightMode] = useState(true);

  //declare refs

  const scrollX = useRef(new Animated.Value(0)).current;

  const pressHandler = () => {
    navigation.navigate("Profile");
  };
  const signOut = () => {
    Securestore.deleteItemAsync("token").then(navigation.navigate("Login"));
  };

  let coinAmount = 40;
  const [prefix, suffix] = ["Studies", "Windesheim"];
  return (
    <View style={styles.profileView}>
      <Image style={styles.profilePic} source={profilePic} />
      <Text style={styles.name}>Gebruiker: {user.name}</Text>
      <Text style={styles.name}>Email: {user.email}</Text>
      <Text style={styles.name}>nationality: Dutch</Text>
      <Text style={styles.name}>School: Windesheim</Text>
      <Text style={styles.name}>Study: HBO-ICT</Text>
      {/* <Text style={styles.name}>Geboortedatum: {user.birthdate}</Text> */}

      {/*<View style={styles.profileInfoContainer}>*/}
      {/* <View style={styles.coin}>
          <Text style={styles.profileInfo}>{coinAmount}</Text>
          <Image style={styles.pointsIcon} source={pointsIcon} />
        </View> */}
      {/* </View> */}
    </View>
  );
};

// local styles
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      coin: {
        flexDirection: "row",
        alignContent: "center",
        width: width / 8,
        alignItems: "center",
        justifyContent: "space-between",
      },
      profileView: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: width / 1.18,
        borderRadius: 25,
        height: height / 5.5,
        bottom: getStatusBarHeight() + height / 9,

        justifyContent: "center",
      },
      profilePic: {
        width: width / 4,
        height: height / 9,
        top: height * -0.07,
        left: width / 16,
      },
      name: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.04,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      email: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.07,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      nationality: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.1,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      school: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.13,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      study: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.16,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      profileInfoContainer: {
        width: width / 2,
        left: width / 14,
        top: getStatusBarHeight() - height * 0.06,
      },
      profileInfo: {
        color: "#000",
        fontSize: 14,
        fontWeight: "bold",
        position: "relative",
      },
      pointsIcon: {
        width: width / 20,
        height: height / 40,
      },
    },
    //------------------------------------------------------------android-------------------------------------------------------------------
    android: {
      coin: {
        flexDirection: "row",
        alignContent: "center",
        width: width / 8,
        alignItems: "center",
        justifyContent: "space-between",
      },
      profileView: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: width / 1.18,
        borderRadius: 25,
        height: height / 3.5,
        bottom: getStatusBarHeight() + height / 1000,
        justifyContent: "center",
        alignSelf: "flex-start",
      },
      profilePic: {
        width: width / 4,
        height: height / 9,
        top: height * -0.07,
        left: width / 16,
      },
      name: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        bottom: getStatusBarHeight() + height * 0.01,
        left: width / 14,
        // position: "absolute",

        //wrap text
      },
      email: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.09,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      nationality: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.12,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      school: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.15,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      study: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.18,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      profileInfoContainer: {
        width: width / 2,
        left: width / 14,
        top: getStatusBarHeight() - height * 0.06,
      },
      profileInfo: {
        color: "#000",
        fontSize: 14,
        fontWeight: "bold",
        position: "relative",
      },
      pointsIcon: {
        width: width / 20,
        height: height / 40,
      },
    },
    //---------------------------------------------------------------default----------------------------------------------------------------------
    default: {
      coin: {
        flexDirection: "row",
        alignContent: "center",
        width: width / 8,
        alignItems: "center",
        justifyContent: "space-between",
      },
      profileView: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: width / 1.18,
        borderRadius: 25,
        height: height / 5.5,
        bottom: getStatusBarHeight() + height / 9,

        justifyContent: "center",
      },
      profilePic: {
        width: width / 4,
        height: height / 9,
        top: height * -0.07,
        left: width / 16,
      },
      name: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.04,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      email: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.07,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      nationality: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.1,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      school: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.13,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      study: {
        color: "#107070",
        fontSize: 16,
        fontWeight: "bold",
        top: getStatusBarHeight() + height * 0.16,
        left: width / 14,
        position: "absolute",

        //wrap text
      },
      profileInfoContainer: {
        width: width / 2,
        left: width / 14,
        top: getStatusBarHeight() - height * 0.06,
      },
      profileInfo: {
        color: "#000",
        fontSize: 14,
        fontWeight: "bold",
        position: "relative",
      },
      pointsIcon: {
        width: width / 20,
        height: height / 40,
      },
    },
  }),
});

export default ProfileInfo;
