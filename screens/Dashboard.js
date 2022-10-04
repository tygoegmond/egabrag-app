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
import Global from "../assets/styles/Global";

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
          <TouchableOpacity
            onPress={pressHandler}
            style={[Global.button, { top: height / 1.6, opacity: 0.5 }]}
          >
            <Text style={Global.buttonText}>Financial Literacy</Text>
          </TouchableOpacity>
          <Text style={styles.dashboard}>Dashboard</Text>
          <Text stylee={styles.welcome}>
            {" "}
            Welcome to My Education lifestlye
          </Text>
        </View>
      </Swiper>
    </View>
  );
}

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
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
    left: width / 10,
    position: "absolute",
  },
});
