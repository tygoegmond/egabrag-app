//imports from react / reactnative

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";


//make button component

const Proceed = ({handleNext}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={(event) => handleNext(event, 0)}
    >
      <Text style={styles.buttonText}>Proceed</Text>
    </TouchableOpacity>
  );
};

//local stylesheet
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#61CBB4",
    width: width / 1.2,
    height: height / 14,
    borderRadius: 10,
    padding: 10,
    bottom: getStatusBarHeight(),
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 0,
  },
});

export default Proceed;
