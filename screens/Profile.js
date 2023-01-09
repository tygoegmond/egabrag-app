import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import medLogo from "../assets/images/medLogo.png";
import Global from "../assets/styles/Global.js";
import * as Progress from "react-native-progress";
import * as Securestore from "expo-secure-store";
import { useState } from "react";
import backgroundImg from "../assets/images/backgroundImg.png";
import BottomDrawer from "../components/BottomDrawer";
import InterestsWidget from "../components/InterestsWidget";
export default function Profile({ navigation }) {
  const signOut = async () => {
    await Securestore.deleteItemAsync("interests");
    Securestore.deleteItemAsync("token").then(navigation.navigate("Start"));
  };
  return (
    <View style={Global.container}>
          <Image style={styles.imgback2} source={backgroundImg} />
      <Text style={styles.heroText}>Profile</Text>
      <InterestsWidget navigation={navigation}/>
      <TouchableOpacity style={[Global.button, { top: 500 }]} onPress={signOut}>
        <Text style={Global.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  images: {
    height: height / 5,
    width: width / 1.2,
  },
  heroText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    position: "absolute",
    zIndex: 1,
    top: height * 0.1,
    left: width * 0.1,
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
});
