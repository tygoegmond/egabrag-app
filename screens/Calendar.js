import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import CalendarItem from "../components/CalendarItem";
import Dashboardpic from "../assets/images/background.png";
import { getStatusBarHeight } from "react-native-status-bar-height";

const Calendar = () => {
  useEffect(() => {
    let months = [];
    let correctMonth = [];

    for (let i = 1; i <= 36; i++) {
      // const date = new Date();
      // const options = { weekday: "long" };
      // date.setDate(date.getDate() + i);
      // let date2 = new Intl.DateTimeFormat("en-US", options).format(date);
      // let day = date.getDate();
      // let month = date.toLocaleString("default", { month: "long" });
      // dates.push({ date: day, weekDay: date.getDay(), month: month });
      // // ✅ 1 Day added
      // console.log(day, date2);

      let current = new Date();
      current.setMonth(current.getMonth() + i);
      const month = current.getMonth();
      const options = { month: "long" };
      const monthName = new Intl.DateTimeFormat("en-US", options).format(
        current
      );
      months.push({ month: month, monthName: monthName, current: current });
      // for(const month in months){

      //   console.log(months[month].current.getDate(), "123123123123")
      // }
      let days = [];

      for (let i = 1; i <= 31; i++) {
        let date2 = new Date();
        const currentMonth = date2.getMonth();
        date2.setDate(date2.getDate() + i);
        
        if(date2.getMonth() === currentMonth){
        days.push(date2.getDate());
        
      }
    }
    console.log(month, "month") 
    correctMonth.push({
      month: month,
      monthName: monthName,
      current: current,
      days: days,
    });
    }
    console.log(correctMonth[2], months.length);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#D4FFF6"
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <Image style={styles.imgback2} source={Dashboardpic} />
      <Text style={styles.heading}>Calendar</Text>
      <FlatList
        horizontal={true}
        numColumns={1}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={[1, 1, 1, 1]}
        style={styles.flatlist}
        renderItem={({ item }) => <CalendarItem />}
      />
    </View>
  );
};
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  heading: {
    position: "absolute",
    top: height * 0.1,
    left: width * 0.1,
    fontSize: 32,
    fontWeight: "bold",
  },
  flatlist: {
    top: getStatusBarHeight() + height / 10,
    width: width,
    height: height * 0.6,
    borderRadius: width / 20,
    //align container to the center of the flatlist
    alignSelf: "center",
  },

  calendarContainer: {
    backgroundColor: "white",
    width: width,
    height: height * 0.6,
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

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

export default Calendar;
