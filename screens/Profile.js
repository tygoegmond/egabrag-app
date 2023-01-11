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
import backgroundImg from "../assets/images/backgroundImg.png";
import BottomDrawer from "../components/BottomDrawer";
import InterestsWidget from "../components/InterestsWidget";
import ProfileInfo from "../components/ProfileInfo";
import axios from "axios";
import profilePic from "../assets/images/profilePic.png";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function Profile({ navigation }) {
  const [re, setRe] = useState("");
  const [user, setUser] = useState("");
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

  const signOut = async () => {
    await Securestore.deleteItemAsync("interests");
    Securestore.deleteItemAsync("token").then(navigation.navigate("Start"));
  };
  return (
    <View style={Global.container}>
      <Image style={styles.imgback2} source={backgroundImg} />
      <Text style={styles.heroText}>Profile</Text>
      <ScrollView>
        <View style={styles.container}>
          <ProfileInfo
            navigation={navigation}
            user={user}
            profilePic={profilePic}
          />
          <InterestsWidget navigation={navigation} />

          <TouchableOpacity
            style={[Global.button, { top: 500 }]}
            onPress={signOut}
          >
            <Text style={Global.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    backgroundImg: backgroundImg,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: height / 1,
  },

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
