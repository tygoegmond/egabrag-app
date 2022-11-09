//importing react / react native assets
import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Global from "../assets/styles/Global";
//creating navigation dots for on boarding component

export default TwoField = ({ type, title, position, setFunction, keyboardType }) => {
  const inputType = type == "password" ? "true" : "false";
  return (
    <View
      style={[
        Global.input,
        {
          marginTop: 0,
          bottom: getStatusBarHeight() + height / position,
          position: "absolute",
          display: "flex",
          margin: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
        },
      ]}
    >
      <TextInput
        autoCapitalize="none"
        keyboardType={keyboardType}
        style={[Global.smallField, { marginLeft: -width / 16}]}
        onChangeText={(e) => setFunction(e)}
        name={title}
        secureTextEntry={inputType}
        defaultValue={""}
      />
      <Text style={[Global.placeholder, { marginLeft: -width / 15}]}>{title}</Text>
      <TextInput
        autoCapitalize="none"
        keyboardType={keyboardType}
        style={[Global.smallField, { right: -width / 15 } ]}
        onChangeText={(e) => setFunction(e)}
        name={title}
        secureTextEntry={inputType}
        defaultValue={""}
      />
      <Text style={[Global.placeholder, { marginLeft: width / 2.6 }]}>{title}</Text>
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
