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
import { getStatusBarHeight } from "react-native-status-bar-height";
import Swiper from "react-native-swiper";
import React, { useCallback, useEffect, useState } from "react";
import Dashboardpic from "../assets/images/Dashboardpic2.png";
import profilePic from "../assets/images/profilePic.png";
import * as Securestore from "expo-secure-store";
import axios from "axios";

export default function Dashboard({ navigation }) {
  //import fonts
  const [re, setRe] = useState("");
  const [user, setUser] = useState("");
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://egabrag.tygoegmond.nl/api/user",
        {
          headers: {
            Authorization:
              "Bearer " + (await Securestore.getItemAsync("token")),
            Accept: "application/json",
          },
        }
      );
      console.log(response.data);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Securestore.getItemAsync("token").then((token) => {
      setRe(token);
    });
    let data = getUserData();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  //

  const pressHandler = async () => {
    navigation.navigate("FinancialLiteracy");
  };
  const getItem = async () => {
    setRe(await Securestore.getItemAsync("token"));
    console.log(re);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <Swiper
        showsPagination={false}
        pagingEnabled={true}
        bounces={true}
        loop={false}
        horizontal={true}
      >
        <View style={styles.container}>
          <Image style={styles.imgback2} source={Dashboardpic} />
          <Text style={styles.dashboard}>Dashboard</Text>

          <TouchableOpacity onPress={getItem} style={styles.profileView}>
            <Image style={styles.profilePic} source={profilePic} />
            <Text style={styles.name}>Hello, {user.name}!</Text>
            <View style={styles.textContainer}>
              <Text style={styles.profileText}>Profile</Text>
            </View>
            <View style={styles.profileInfoContainer}>
              <Text style={styles.profileInfo}>Age: 18</Text>
              <Text style={styles.profileInfo}>Country: Netherlands</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Swiper>
    </View>
  );
}

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
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
    backgroundColor: "#fff",
    width: width / 1.18,
    borderRadius: 25,
    height: height / 5.5,
    bottom: getStatusBarHeight() + height / 5.5,

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
    width: width / 2,
    left: width / 11,
    top: getStatusBarHeight() - height * 0.08,
  },
  profileInfo: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: height / 120,
    position: "relative",
  },
});
