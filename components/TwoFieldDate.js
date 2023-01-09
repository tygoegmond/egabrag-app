//importing react / react native assets
import React, {useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Pressable } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import DateTimePicker from "@react-native-community/datetimepicker";
import Global from "../assets/styles/Global";
//creating navigation dots for on boarding component

export default TwoFieldDate = ({ type,mode, setMode, title, title2, setFunction2, position, setFunction, keyboardType,date, setDate }) => {
  const inputType = type == "password" ? "true" : "false";



  useEffect(() => {
    console.log(mode)

  }, [mode])
  
  const spinner = ( ) => {
    return (
      <View style={styles.modal}>

      <DateTimePicker
            display="spinner"
            style={styles.inlinedate}
            themeVariant="light"
            value={date}
            mode="date"
            onChange={(e) => {
              setDate(new Date(e.nativeEvent.timestamp));
            }}
            />
            </View>
    )
          }


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
      <Pressable onPress={() => setMode((mode) => !mode)}>

      <View
        autoCapitalize="none"
        keyboardType={keyboardType}
        style={[Global.smallField, { marginLeft: -width / 16}]}
        onChangeText={(e) => setFunction2(e)}
        name={title2}
        secureTextEntry={inputType}
        defaultValue={""}
      />
      <Text style={[Global.placeholder, { marginLeft: -width / 15}]}>{title}</Text>
      <Text style={styles.value}>{date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}</Text>
        {/* <DateTimePicker
            display="default"
            style={styles.inlinedate}
            themeVariant="dark"
            value={date}
            mode="date"
            onChange={(e) => {
              setDate(new Date(e.nativeEvent.timestamp));
            }}

          /> */}
      </Pressable>
      <TextInput
        autoCapitalize="none"
        keyboardType={keyboardType}
        style={[Global.smallField, { right: -width / 15 } ]}
        onChangeText={(e) => setFunction(e)}
        name={title}
        secureTextEntry={inputType}
        defaultValue={""}
      />
      <Text style={[Global.placeholder, { marginLeft: width / 2.6 }]}>{title2}</Text>
  
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
  inlinedate: {
    position: "absolute",
    height: height / 20,
    width: width / 2,
    borderRadius: 8,
    color: "#fff",
    fontSize: 26,
  },
  modal: {
    position: "absolute",
    height: height * 0.3,
    zIndex: 1231,
    top: height * 0.2,
    width: width * 0.8,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 8,
    color: "#fff",
    fontSize: 26,
    backgroundColor: "#fff",
  },
  value: {
    position: "absolute",
    top: height * 0.038,
    fontWeight: "bold",
    fontSize: 18,

    left: width * -0.015,
  },
});
