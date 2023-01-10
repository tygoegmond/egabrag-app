import { registerRootComponent } from "expo";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ContentGrid = ({ data, navigation }) => {
  const DetailedEbookHandler = () => {
    navigation.navigate("DetailedEbook");
  };
  const grid = data.map((ebook, index) => {
    return (
      <View key={index} style={styles.gridItem}>
        <TouchableOpacity onPress={DetailedEbookHandler}>
        <Image style={styles.images} source={ebook.source} />
        </TouchableOpacity>
      </View>
    );
  });
  return <View style={styles.contentGrid}>{grid}</View>;
};

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  contentGrid: {
    display: "flex",
    width: width / 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: "10% 10%",
    marginBottom: height / 5,
  },
  gridItem: {
    width: width / 5,
    margin: width / 60,
  },
  images: {
    width: width / 5,
    height: height / 7,
  },
});

export default ContentGrid;
