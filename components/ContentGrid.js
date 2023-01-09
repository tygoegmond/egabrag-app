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

const ContentGrid = ({ data, navigation }) => {
  const grid = data.map((ebook, index) => {
    return (
      <View key={index} style={styles.gridItem}>
        <Image style={styles.images} source={ebook.source} />
        <Text>{ebook.title}</Text>
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
