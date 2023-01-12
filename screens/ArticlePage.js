import React, { useState, useEffect } from "react";
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
  ScrollView,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import * as Securestore from "expo-secure-store";
import axios from "axios";
import backgroundImg from "../assets/images/backgroundImg.png";

function articlepage({ navigation }) {
  const [title, setTitle] = useState("");
  const [re, setRe] = useState("");
  const [user, setUser] = useState([]);
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://egabrag.tygoegmond.nl/api/posts/2",
        {
          headers: {
            Authorization:
              "Bearer " + (await Securestore.getItemAsync("token")),
            Accept: "application/json",
          },
        }
      );
      console.log(response.data.data.title, "response");
      setUser(response.data.data.body.blocks);
      setTitle(response.data.data.title);
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

  const items = user.map((item, index) => {
    return (
      <Text
        key={index}
        style={item.type === "header" ? styles.header : styles.paragraph}
      >
        {item.data.text}
      </Text>
    );
  });
  return (
    <View style={styles.ArticlePage}>
      <Image source={backgroundImg} style={styles.backgroundImg} />

      <Text style={styles.title}>{title}</Text>
      <View>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* {user.body.blocks.map((item) => {
            return (
              <View>
                <Text>{item.text}</Text>
              </View>
            );
          })} */}
          <View style={styles.textDiv}>{items}</View>
          {/* <Text style={styles.id}>{user}</Text> */}
        </ScrollView>
      </View>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  ArticlePage: {
    color: "#107070",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D4FFF6",
  },
  scrollView: {
    marginTop: height / 6,
    backgroundColor: "white",
    opacity: 0.8,
    width: width,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: height / 30,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  id: {
    fontSize: 2,
    height: height,
    color: "black",
    top: getStatusBarHeight() + height / 15,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 20,
    marginBottom: height / 25,
  },
  textDiv: {
    width: width * 0.85,
    justifyContent: "center",
    flex: 1,
    // center the text
    alignSelf: "center",
    paddingTop: height / 20,
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    color: "#107070",
    fontSize: 28,
    fontWeight: "bold",
    top: getStatusBarHeight() + height / 40,
    position: "absolute",
    flexWrap: "wrap",
    alignSelf: "center",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
    width: width,
    height: height,
  },
});

export default articlepage;
