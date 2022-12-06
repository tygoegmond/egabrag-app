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

export default function FinancialLiteracy({ navigation }) {
  //import fonts
  const [currentAmount, setCurrentAmount] = useState();
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

  const EbookHandler = () => {
    navigation.navigate("Ebooks");
  };

  const popular = [
    {
      source: content1,
      title: "a",
      popularity: "1",
    },
    {
      source: content2,
      title: "b",
      popularity: "2",
    },
    {
      source: content3,
      title: "c",
      popularity: "3",
    },
    {
      source: content4,
      title: "d",
      popularity: "4",
    },
    {
      source: content5,
      title: "e",
      popularity: "5",
    },
    {
      source: content6,
      title: "f",
      popularity: "6",
    },
  ];

  const finance = [
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
    {
      source: content1,
      title: "a",
    },
    {
      source: content2,
      title: "b",
    },
  ];

  const mindfulness = [
    {
      source: content3,
      title: "c",
    },
    {
      source: content4,
      title: "d",
    },
    {
      source: content3,
      title: "c",
    },
    {
      source: content4,
      title: "d",
    },
    {
      source: content3,
      title: "c",
    },
    {
      source: content4,
      title: "d",
    },
    {
      source: content3,
      title: "c",
    },
    {
      source: content4,
      title: "d",
    },
    {
      source: content3,
      title: "c",
    },
    {
      source: content4,
      title: "d",
    },
  ];

  const education = [
    {
      source: content5,
      title: "e",
    },
    {
      source: content6,
      title: "f",
    },
    {
      source: content5,
      title: "e",
    },
    {
      source: content6,
      title: "f",
    },
    {
      source: content5,
      title: "e",
    },
    {
      source: content6,
      title: "f",
    },
    {
      source: content5,
      title: "e",
    },
    {
      source: content6,
      title: "f",
    },
    {
      source: content5,
      title: "e",
    },
    {
      source: content6,
      title: "f",
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
              <Pressable onPress={() => navigation.navigate("PdfPage")}>
              <View>
                {/* singular on boarding screen word gerendered */}
                <Text style={styles.popularityNumber}>{item.popularity}</Text>
                <Image source={item.source} style={styles.imagesPopular} />
<<<<<<< Updated upstream
=======
                {/* <Text style={{ left: width / 10 }}>{item.title}</Text> */}
>>>>>>> Stashed changes
              </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>Finance</Text>
          <Pressable style={styles.pressableDots}>
            <Text style={styles.dots}>•••</Text>
          </Pressable>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={finance}
            style={styles.flatlist}
            renderItem={({ item }) => (
              <View>
                {/* singular on boarding screen word gerendered */}
                <Image source={item.source} style={styles.images} />
<<<<<<< Updated upstream
=======
                {/* <Text>{item.title}</Text> */}
>>>>>>> Stashed changes
              </View>
            )}
          />
        </View>
        <View style={styles.widgetViewContentContainer}>
          <Text style={styles.widgetViewContentTitle}>Mindfulness</Text>
          <Pressable style={styles.pressableDots}>
            <Text style={styles.dots}>•••</Text>
          </Pressable>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={mindfulness}
            style={styles.flatlist}
            renderItem={({ item }) => (
              <View>
                {/* singular on boarding screen word gerendered */}
                <Image source={item.source} style={styles.images} />
<<<<<<< Updated upstream
=======
                {/* <Text>{item.title}</Text> */}
>>>>>>> Stashed changes
              </View>
            )}
          />
        </View>
        <View
          style={[
            styles.widgetViewContentContainer,
            { marginBottom: height / 10 },
          ]}
        >
          <Text style={styles.widgetViewContentTitle}>Education</Text>
          <Pressable style={styles.pressableDots}>
            <Text style={styles.dots}>•••</Text>
          </Pressable>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={education}
            style={styles.flatlist}
            renderItem={({ item }) => (
              <View>
                {/* singular on boarding screen word gerendered */}
                <Image source={item.source} style={styles.images} />
<<<<<<< Updated upstream
=======
                {/* <Text>{item.title}</Text> */}
>>>>>>> Stashed changes
              </View>
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
    color: "#107070",
    backgroundColor: "white",
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
    width: width / 5,
    height: height / 7,
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
