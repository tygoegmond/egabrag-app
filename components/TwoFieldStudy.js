//importing react / react native assets
import React, {useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Pressable } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import DateTimePicker from "@react-native-community/datetimepicker";
import Global from "../assets/styles/Global";
//creating navigation dots for on boarding component

export default TwoFieldStudy = ({ type,mode, setMode, title, title2, setFunction2, position, setFunction, keyboardType,date, setDate }) => {
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
          width: width * 0.9,
          margin: "auto",
          flexDirection: "row",
          justifyContent: "space-around",
        },
      ]}
    >
     
      <TextInput
        autoCapitalize="none"
        keyboardType={keyboardType}
        style={[Global.smallField,  ]}
        onChangeText={(e) => setFunction(e)}
        name={title}
         
        defaultValue={""}
      />
      <Text style={[Global.placeholder, { marginLeft: width * 0.03 }]}>{title}</Text>
      <TextInput
        autoCapitalize="none"
        keyboardType={keyboardType}
        style={[Global.smallField,  ]}
        onChangeText={(e) => setFunction2(e)}
        name={title}
         
        defaultValue={""}
      />
      <Text style={[Global.placeholder, { marginLeft: width / 2.1 }]}>{title2}</Text>
  
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
