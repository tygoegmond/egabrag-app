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
import React, { useCallback, useState, useRef } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Swiper from "react-native-swiper";
import axios from "axios";
import * as Securestore from "expo-secure-store";

//import assets

import loginBackground from "../assets/images/loginBackground.jpg";
import Global from "../assets/styles/Global";

//import expo assets
import { useFonts } from "expo-font";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

export default function Login({ navigation }) {
  //import fonts
  axios.defaults.headers.post["Accept"] = "application/jsonr";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [res, setRes] = useState();

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

  // login functions

  const logIn = async () => {
    try {
      const data = {
        email: email,
        password: password,
        device_name: "bruh",
      };
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      const response = await axios.post(
        "https://egabrag.tygoegmond.nl/api/sanctum/token",
        data,
        config
      );
      console.log(response.data, "response");
      setRes(response);
      updateSecurestore(response.data);
      navigation.navigate("Dashboard");

      // axios
      //   .post("127.0.0.1:8000/api/sanctum/token", data, config)
      //   .then((res) => {
      //     console.log(res);
      //     console.log("test")
      //     console.log(res.data);
      //     setRes(res)
      //     Securestore.setItemAsync("token", res.data.token);
      //     Securestore.setItemAsync("name", res.data.name);
      //   })
      //   .catch((error) => console.log(error));
    } catch (error) {
      setErrors("");
      console.log(error.response.data.errors);
      let errorMap = "";
      for (var key in error.response.data.errors) {
        console.log(key);
        console.log(error.response.data.errors[key]);
        if (errors !== error.response.data.errors[key][0]) {
          errorMap = errorMap + error.response.data.errors[key][0] + " ";
        }
      }
      setErrors(errorMap);
    }
  };

  async function updateSecurestore(resdata) {
    console.log(resdata, "dasdasdasd");
    await Securestore.setItemAsync("token", resdata);
  }
  //create press handlers
  const pressHandler = () => {
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
            onChangeText={(e) => setEmail(e)}
            name="Email"
            defaultValue={"me@tygoegmond.n"}
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
          <Text style={styles.error}>{errors}</Text>
          <TextInput
            style={Global.largeField}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
            name="Password"
            defaultValue={"12345678"}
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
          onPress={() => logIn()}
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
  error: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    bottom: getStatusBarHeight() - height / 3.5,
    left: 0,
    right: 0,
  },
});
