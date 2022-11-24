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
      <ScrollView key={index} style={styles.gridItem}>
        <Image style={styles.images} source={ebook.source} />
        <Text>{ebook.title}</Text>
      </ScrollView>
    );
  });
  return <View style={styles.contentGrid}>{grid}</View>;
};

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  contentGrid: {
    display: "flex",
    top: 0,
    width: width,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: "10% 10%",
  },
  gridItem: {
    width: width / 5,
    margin: width * 0.05,
  },
  images: {
    width: width / 4.5,
    height: height / 6.3,
  },
});

export default ContentGrid;
