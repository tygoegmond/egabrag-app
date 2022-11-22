import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import RNPickerSelect from "react-native-picker-select";
const AlertMe = ({setAlert}) => {
  return (
    <View style={styles.container}>
      <View style={styles.travelTimeContainer}>
        <Text style={styles.datePickerText}>Notify me</Text>
        <RNPickerSelect
          onValueChange={(value) => setAlert(value)}
          style={{
            iconContainer: {
              top: 20,
              right: 10,
            },
            valueContainer: {
              color: "grey",
              alignContent: "center",
              fontSize: 16,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "100%",
              right: width * 0.05,
              fontWeight: "bold",
            },
            inputIOS: {
              color: "grey",
              alignContent: "center",
              fontSize: 16,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "100%",
              right: width * 0.05,
              fontWeight: "bold",
            },
            placeholder: {
              color: "grey",
              alignContent: "center",
              fontSize: 16,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "100%",
              right: width * 0.05,
              fontWeight: "bold",
            },
          }}
          placeholder={{ label: "Don't notify", value: null }}
          items={[
            { label: "5 minutes before", value: 5 },
            { label: "15 Minutes before", value: 15 },
            { label: "30 minutes before", value: 30 },
            { label: "1 hour before", value: 60 },
            { label: "1 hour, 30 minutes before", value: 90 },
            { label: "2 hours before", value: 120 },
          ]}
        />
      </View>
    </View>
  );
};

export default AlertMe;
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    height: height * 0.1,
    justifyContent: "center",
    width: width * 0.9,
    top: height * -0.13,
    borderRadius: height * 0.02,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "column",
  },
  datePickerText: {
    fontSize: 18,
    color: "#000",
  },  travelTimeContainer: {
    flex1: 1,
    left: width * 0.05,
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.85,
    height: height * 0.06,
    flexDirection: "row",
  },
});
