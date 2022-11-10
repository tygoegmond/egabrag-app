import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";

const CalendarItem = ({ dayarray, item }) => {
  // console.log(item)

  const [date, setDate] = useState();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const something = dayarray.map((day, index) => {
    // console.log(`full date: ${day.date} ${day.monthName} ${day.year}`);
    let datum = new Date(`${day.date} ${day.monthName} ${day.year}`);

    let test = [];
    if (index === 0) {
      const day = datum.getDay();
      if (day === 0) {
        test.push(1, 1, 1, 1, 1, 1);
      }
      for (let i = 1; i < day; i++) {
        test.push(i);
      }
    }

    const a = test.map((item, index) => {
      return (
        <View key={index + "d"} style={styles.dayItemNone}>
          <Text style={styles.dayText}></Text>
          <Text style={styles.d}></Text>
        </View>
      );
    });

    // console.log(date, `date ${date?.getDate()} weekday: ${date?.getDay()}`)
    // console.log(datum.getDay(), "datum")

    const options = { weekday: "long" };
    let dayOfTheWeek = datum.getDay();
    let dayOfTheWeekFull = new Intl.DateTimeFormat("en-US", options).format(
      datum
    );

    // console.log(day.dayOfTheWeek)
    // console.log(day)
    if (index === 0) {
      if(day.appointments.length > 0){
      return (
        <>
          {a}
          <View key={index} style={styles.dayItemA}>
            <Text style={styles.dayText}>{day.date}</Text>
          </View>
        </>
      );
      } else {
        return (
          <>
          {a}
          <View key={index} style={styles.dayItem}>
            <Text style={styles.dayText}>{day.date}</Text>
          </View>
        </>
        );
      }
    } else {
      if(day.appointments.length > 0){
      return (
        <View key={index} style={styles.dayItemA}>
          <Text style={styles.dayText}>{day.date}</Text>
        </View>
      );
      } else {
        return(
        <View key={index} style={styles.dayItem}>
        <Text style={styles.dayText}>{day.date}</Text>
      </View>)
    }
    }
  });

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
        <Text style={styles.monthYear}>
          {item.monthName} {item.year}
        </Text>
        <View style={styles.monthContainer}>
          {dayComponent}
          {something}
        </View>
      </View>
    </View>
  );
};

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  d: {
    color: "white",
  },
  monthYear: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 10,
  },
  dayItemA: {
    width: width / 10,
    height: width / 10,
    borderRadius: width / 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  dayItem: {
    width: width / 10,
    height: width / 10,
    borderRadius: width / 20,
    backgroundColor: "#61CBB4",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  dayItemNone: {
    width: width / 10,
    height: width / 10,
    borderRadius: width / 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  monthContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "start",
    width: width * 0.9,
    marginTop: height * 0.0005,
    height: height * 0.7,
    //put the container in the center of the screen
    alignSelf: "center",
    float: "left",
    position: "absolute",
    zIndex: 1,
    top: height * 0.1,
    baclgroundColor: "red",
  },
  day: {
    margin: 5,
    width: width * 0.1,
  },
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
