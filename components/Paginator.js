//importing react / react native assets
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

//creating navigation dots for on boarding component

export default Paginator = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 15,
        justifyContent: "center",
        position: "absolute",
        zIndex: 111,
        bottom: getStatusBarHeight() + 80,
      }}
    >
      {data.map((_, i) => {
        return <View style={[styles.dot, { width: 10 }]} key={i.toString()} />;
      })}
    </View>
  );
};



//local stylesheet
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  dot: {
    position: "relative",
    height: 10,
    borderRadius: 8,
    backgroundColor: "#493d8a",
    marginHorizontal: 8,
  },
});
