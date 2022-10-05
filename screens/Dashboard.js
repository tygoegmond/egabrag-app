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
import React, { useCallback } from "react";
import Dashboardpic from "../assets/images/Dashboardpic2.png";
import profilePic from "../assets/images/profilePic.png";

export default function Dashboard({ navigation }) {
  //import fonts
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

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

          <TouchableOpacity style={styles.profileView}>
            <Image style={styles.profilePic} source={profilePic} />
            <View style={styles.textContainer}>
              <Text style={styles.profileText}>Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={pressHandler} style={styles.buttoniguess}>
            <Text style={styles.buttontextiguess}>Press me</Text>
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
    top: getStatusBarHeight() - height / 11,
    left: width / 16,
  },
  profileText: {
    color: "#fff",
    backgroundColor: "#61CBB4",
    padding: 20,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textContainer: {
    width: width / 1.5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});
