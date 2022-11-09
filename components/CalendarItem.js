import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import React, { useEffect } from "react";

const CalendarItem = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dayComponent = days.map((day, index) => {
    return (
      <View key={index} style={styles.day}>
        <Text style={styles.dayText}>{day}</Text>
      </View>
    );
  });



  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Text style={styles.heading}>
          <View style={styles.dayContainer}>{dayComponent}</View>
          <View style={styles.monthContainer}></View>
        </Text>
      </View>
    </View>
  );
};

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  dayContainer: {
    flexDirection: "row",
  
    justifyContent: "space-between",
    width: width * 0.8,
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
  },
  container: {
    width: width,
  },
  calendarContainer: {
    backgroundColor: "white",
    width: width,
    marginRight: width * 0.3,
    height: height * 0.7,
    borderRadius: width / 20,
    //create shadow for the container
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    padding: width / 10,
    shadowOpacity: 0.105,
    shadowRadius: 1.84,
    elevation: 5,
  },
  imgback2: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
    width: width,
    height: height,
  },
});

export default CalendarItem;
