import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import medLogo from "../assets/images/medLogo.png";
import Global from "../assets/styles/Global.js";
import * as Progress from "react-native-progress";
import * as Securestore from "expo-secure-store";
import { useState } from "react";
import BottomDrawer from "../components/BottomDrawer";
export default function Profile({ navigation }) {
  const signOut = () => {
    Securestore.deleteItemAsync("token").then(navigation.navigate("Start"));
  };
  return (
    <View style={Global.container}>
      <Text>Profile</Text>
      <Pressable
        style={[Global.button, { top: height / 1.8 }]}
        onPress={signOut}
      >
        <Text style={Global.buttonText}>Sign Out</Text>
      </Pressable>

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
});
