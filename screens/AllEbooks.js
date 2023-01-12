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
import BottomDrawer from "../components/BottomDrawer";
import { ScrollView } from "react-native-gesture-handler";
import backgroundImg from "../assets/images/backgroundImg.png";
import * as Securestore from "expo-secure-store";
export default function FinancialLiteracy({ navigation }) {
  //import fonts
  const [currentAmount, setCurrentAmount] = useState();
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

  const EbooksHandler = () => {
    navigation.navigate("Ebooks");
  };

  const DetailedEbookHandler = () => {
    navigation.navigate("DetailedEbook");
  };

  const popular = [
    {
      source: content1,
      title: "a",
      popularity: "1",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Creating_a_savings_first_aid_kit.pdf",
    },
    {
      source: content2,
      title: "b",
      popularity: "2",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Money_Habits_Guide_for_30_days.pdf",
    },
    {
      source: content3,
      title: "c",
      popularity: "3",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_10_Easy_Steps_to_Turning_Dreams_into_Reality.pdf",
    },
    {
      source: content4,
      title: "d",
      popularity: "4",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_The_Real_Power_of_Affirmations.pdf",
    },
    {
      source: content5,
      title: "e",
      popularity: "5",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Mindfulness_Practice_Progressive_Muscle_Relaxation.pdf",
    },
    {
      source: content6,
      title: "f",
      popularity: "6",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Onderzoeksrapport_Esther_Zouwra.pdf",
    },
  ];

  const finance = [
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
      source: content1,
      title: "a",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Creating_a_savings_first_aid_kit.pdf",
    },
    {
      source: content2,
      title: "b",
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
      source: content1,
      title: "a",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Creating_a_savings_first_aid_kit.pdf",
    },
    {
      source: content2,
      title: "b",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Financial_Literacy_Money_Habits_Guide_for_30_days.pdf",
    },
  ];

  const mindfulness = [
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
      source: content3,
      title: "c",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_10_Easy_Steps_to_Turning_Dreams_into_Reality.pdf",
    },
    {
      source: content4,
      title: "d",
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
      source: content3,
      title: "c",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_10_Easy_Steps_to_Turning_Dreams_into_Reality.pdf",
    },
    {
      source: content4,
      title: "d",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=FreeBook_The_Real_Power_of_Affirmations.pdf",
    },
  ];

  const education = [
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
      source: content5,
      title: "e",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Mindfulness_Practice_Progressive_Muscle_Relaxation.pdf",
    },
    {
      source: content6,
      title: "f",
      link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://u147954p139675.web0150.zxcs-klant.nl/?book=Onderzoeksrapport_Esther_Zouwra.pdf",
    },
  ];

  return (
    <View style={styles.AllEbooks}>
      <Image source={backgroundImg} style={styles.backgroundImg} />
      <ScrollView>
        <Text style={[styles.title, { marginTop: height / 25 }]}>E-Books</Text>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>Popular</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={popular}
            style={styles.flatlist}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  (async () => {
                    await Securestore.setItemAsync("link", item.link);
                  })();
                  console.log(item.link);
                  DetailedEbookHandler();
                }}
              >
                <View>
                  <Text style={styles.popularityNumber}>{item.popularity}</Text>
                  <Image source={item.source} style={styles.imagesPopular} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>Finance</Text>
          <Pressable style={styles.pressableDots} onPress={EbooksHandler}>
            <Text style={styles.dots}>•••</Text>
          </Pressable>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={finance}
            style={styles.flatlist}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  (async () => {
                    await Securestore.setItemAsync("link", item.link);
                  })();
                  console.log(item.link);
                  DetailedEbookHandler();
                }}
              >
                <View>
                  <Image source={item.source} style={styles.images} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>Mindfulness</Text>
          <Pressable style={styles.pressableDots} onPress={EbooksHandler}>
            <Text style={styles.dots}>•••</Text>
          </Pressable>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={mindfulness}
            style={styles.flatlist}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  (async () => {
                    await Securestore.setItemAsync("link", item.link);
                  })();
                  console.log(item.link);
                  DetailedEbookHandler();
                }}
              >
                <View>
                  <Image source={item.source} style={styles.images} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={[
            styles.widgetViewContentContainer,
            { marginBottom: height / 9 },
          ]}
        >
          <Text style={styles.widgetViewContentTitle}>Education</Text>
          <Pressable style={styles.pressableDots} onPress={EbooksHandler}>
            <Text style={styles.dots}>•••</Text>
          </Pressable>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={education}
            style={styles.flatlist}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  (async () => {
                    await Securestore.setItemAsync("link", item.link);
                  })();
                  console.log(item.link);
                  DetailedEbookHandler();
                }}
              >
                <View>
                  <Image source={item.source} style={styles.images} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <BottomDrawer navigation={navigation} />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  AllEbooks: {
    width: width / 1,
    height: height / 1,
    flex: 1,
  },
  title: {
    color: "rgba(36, 118, 114, 0.25)",
    fontSize: width / 10,
    fontWeight: "bold",
    paddingLeft: width / 20,
  },
  widgetViewContentTitle: {
    color: "rgba(36, 118, 114, 1)",
    fontSize: width / 18,
    fontWeight: "bold",
    marginBottom: height / 100,
  },
  widgetViewContentContainer: {
    marginBottom: 18,
    width: width * 0.9,
    alignSelf: "center",
  },
  images: {
    width: width / 4.8,
    height: height / 6.72,
    marginRight: width / 40,
  },
  imagesPopular: {
    width: width / 5,
    height: height / 7,
    marginRight: width / 7,
    left: width / 10,
  },
  popularityNumber: {
    color: "rgba(36, 118, 114, 0.25)",
    fontSize: width / 3.8,
    fontWeight: "bold",
    position: "absolute",
    bottom: height / 100,
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
  dots: {
    position: "absolute",
    color: "rgba(36, 118, 114, 1)",
    fontSize: width / 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  pressableDots: {
    position: "absolute",
    left: width / 1.25,
    paddingHorizontal: width / 20,
    paddingVertical: height / 60,
  },
});
