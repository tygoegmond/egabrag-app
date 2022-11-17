import { registerRootComponent } from "expo";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  Dimensions,
} from "react-native";

const ContentGrid = ({ data, navigation }) => {
  const grid = data.map((ebook, index) => {
    return (
      <View style={styles.gridItem}>
        <Image style={styles.images} source={ebook.source} />
        <Text key={index}>{ebook.title}</Text>
      </View>
    );
  });
  return (
    <View style={styles.contentGrid}>
      <Text>{grid}</Text>
    </View>
  );
};

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  contentGrid: {
    display: "flex",
    top: 0,
    height: height,
    flexGrow: 1,
    alignContent: "center",
    alignItems: "center",
    gap: width / 10,
  },
  gridItem: {
    width: width / 5,
  },
  images: {
    width: width / 4.5,
    height: height / 6.3,
    marginRight: width / 40,
  },
});

export default ContentGrid;
