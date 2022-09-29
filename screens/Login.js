//import react / react native assets
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
import React, { useCallback } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Swiper from "react-native-swiper";

//import assets

import loginBackground from "../assets/images/loginBackground.jpg";
import Global from "../assets/styles/Global";

//import expo assets
import { useFonts } from "expo-font";

export default function Login({ navigation }) {
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
  //create press handlers

  const pressHandler = async () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={Global.container}>
      <View style={Global.container}>
        <Image style={styles.imgback2} source={loginBackground} />
        <View style={styles.imgback} />
        <Image
          style={styles.logo}
          source={require("../assets/images/medLogo.png")}
        />
        <View
          style={[
            Global.input,
            {
              marginTop: 0,
              bottom: getStatusBarHeight() + height / 2.4,
              position: "absolute",
            },
          ]}
        >
          <TextInput
            autoCapitalize="none"
            keyboardType={"email-address"}
            style={Global.largeField}
            name="Email"
          />
          <Text style={Global.placeholder}>Email</Text>
        </View>
        <View
          style={[
            Global.input,
            {
              bottom: getStatusBarHeight() + height / 3.1,
              position: "absolute",
            },
          ]}
        >
          <TextInput
            style={Global.largeField}
            autoCapitalize="none"
            secureTextEntry={true}
            name="Email"
          />
          <Text style={Global.placeholder}>Password</Text>
        </View>
        <TouchableOpacity
          style={[
            Global.button,
            {
              bottom: getStatusBarHeight() + height / 4.5,
              position: "absolute",
            },
          ]}
          onPress={pressHandler}
        >
          <Text style={Global.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//local stylesheet
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
  imgback: {
    flex: 1,
    width: width,
    height: height,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    bottom: getStatusBarHeight() + 120,
    position: "absolute",
    fontFamily: "great-escape",
  },
  logo: {
    width: width / 0.5,
    height: height / 4,
    resizeMode: "contain",
    poistion: "absolute",
    top: getStatusBarHeight() - 190,
    margin: 0,
  },
});
