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
import { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Swiper from "react-native-swiper";
import React, { useCallback } from "react";
import Dashboardpic from "../assets/images/Dashboardpic2.png";
import Global from "../assets/styles/Global";
import content1 from "../assets/images/content1.png";
import content2 from "../assets/images/content2.png";
import content3 from "../assets/images/content3.jpg";
import content4 from "../assets/images/content4.png";
import content5 from "../assets/images/content5.jpg";
import content6 from "../assets/images/content6.webp";
import ContentGrid from "../components/ContentGrid";
import BottomDrawer from "../components/BottomDrawer";
import backgroundImg from "../assets/images/backgroundImg.png";
import { ScrollView } from "react-native-gesture-handler";

export default function Ebooks({ navigation }) {
  const Ebooks = [
    {
      source: content1,
      title: "a",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Creating_a_savings_first_aid_kit.pdf",
    },
    {
      source: content2,
      title: "b",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Money_Habits_Guide_for_30_days.pdf",
    },
    {
      source: content3,
      title: "c",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_10_Easy_Steps_to_Turning_Dreams_into_Reality.pdf",
    },
    {
      source: content4,
      title: "d",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_The_Real_Power_of_Affirmations.pdf",
    },
    {
      source: content5,
      title: "e",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Mindfulness_Practice_Progressive_Muscle_Relaxation.pdf",
    },
    {
      source: content6,
      title: "f",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Onderzoeksrapport_Esther_Zouwra.pdf",
    },
    {
      source: content1,
      title: "g",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Creating_a_savings_first_aid_kit.pdf",
    },
    {
      source: content2,
      title: "h",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Money_Habits_Guide_for_30_days.pdf",
    },
    {
      source: content3,
      title: "i",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_10_Easy_Steps_to_Turning_Dreams_into_Reality.pdf",
    },
    {
      source: content4,
      title: "j",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_The_Real_Power_of_Affirmations.pdf",
    },
    {
      source: content5,
      title: "k",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Mindfulness_Practice_Progressive_Muscle_Relaxation.pdf",
    },
    {
      source: content6,
      title: "l",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Onderzoeksrapport_Esther_Zouwra.pdf",
    },
    {
      source: content1,
      title: "a",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Creating_a_savings_first_aid_kit.pdf",
    },
    {
      source: content2,
      title: "b",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Money_Habits_Guide_for_30_days.pdf",
    },
    {
      source: content3,
      title: "c",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_10_Easy_Steps_to_Turning_Dreams_into_Reality.pdf",
    },
    {
      source: content4,
      title: "d",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_The_Real_Power_of_Affirmations.pdf",
    },
    {
      source: content5,
      title: "e",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Mindfulness_Practice_Progressive_Muscle_Relaxation.pdf",
    },
    {
      source: content6,
      title: "f",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Onderzoeksrapport_Esther_Zouwra.pdf",
    },
    {
      source: content1,
      title: "g",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Creating_a_savings_first_aid_kit.pdf",
    },
    {
      source: content2,
      title: "h",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Money_Habits_Guide_for_30_days.pdf",
    },
    {
      source: content3,
      title: "i",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_10_Easy_Steps_to_Turning_Dreams_into_Reality.pdf",
    },
    {
      source: content4,
      title: "j",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_The_Real_Power_of_Affirmations.pdf",
    },
  ];

  return (
    <View style={styles.ebooks}>
      <Image source={backgroundImg} style={styles.backgroundImg} />
      <Text style={[styles.title]}>E-Books</Text>
      <ScrollView style={{ top: height / 12 }}>
        <ContentGrid data={Ebooks} navigation={navigation} />
      </ScrollView>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  ebooks: {
    width: width / 1,
    height: height / 1,
    flex: 1,
  },
  title: {
    color: "#107070",
    fontSize: 32,
    fontWeight: "bold",
    top: getStatusBarHeight() + height / 32,
    left: width / 11.5,
    display: "flex",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
    width: width,
    height: height,
    opacity: 0.5,
  },
});
