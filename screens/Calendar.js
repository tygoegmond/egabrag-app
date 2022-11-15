import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import CalendarItem from "../components/CalendarItem";
import Dashboardpic from "../assets/images/background.png";
import { getStatusBarHeight } from "react-native-status-bar-height";
import BottomSheetCalendar from "../components/BottomSheetCalendar";
import Agenda from "react-native-calendars/src/agenda";
const Calendar = () => {
  const [data, setData] = useState([]);
  const [bottomHeight, setBottomHeight] = React.useState(1);
  const [onFocusShift, setFocusShift] = useState(false);
  const [addAppointmentMode, setAddAppointmentMode] = useState(false);
  function moveBottomSheet(amount) {
    if (amount === -1) {
      setBottomHeight(1);
    } else {
      setBottomHeight(amount);
    }
    if (bottomHeight === 7) {
      setBottomHeight(1.5);
    }
  }
  useEffect(() => {
    moveBottomSheet(-1);
    console.log(onFocusShift);
  }, []);

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
      let currentYear = current.getFullYear();
      const month = current.getMonth();
      const options = { month: "long" };
      const monthName = new Intl.DateTimeFormat("en-US", options).format(
        current
      );
      // console.log(currentYear);
      months.push({
        month: month,
        monthName: monthName,
        current: current,
        year: currentYear,
      });
      // for(const month in months){
      //   console.log(months[month].current.getDate(), "123123123123")
      // }

      let days = [];
      let monthAmounts31 = [11, 0, 2, 4, 6, 7, 9];
      let monthAmounts30 = [10, 3, 5, 8];
      let monthAmounts28 = [1];

      if (monthAmounts31.includes(month)) {
        for (let j = 1; j <= 31; j++) {
          let date2 = new Date();
          const currentMonth = date2.getMonth();
          date2.setDate(date2.getDate() - 9);
          date2.setDate(date2.getDate() + j);
          const options = { weekday: "long" };
          // console.log(months[i-1].year)
          days.push({
            date: j,
            month: months[i - 1].month,
            appointments: [],
            dayOfTheWeek: date2.getDay(),
            monthName: months[i - 1].monthName,
            year: months[i - 1].year,
          });
          // console.log(
          //   `date: ${j}  month: ${months[i - 1].month} monthName: ${
          //     months[i - 1].monthName
          //   } Itteration:${j} monthItteration: ${i}`
          // );
        }
      }
      if (monthAmounts30.includes(month)) {
        for (let j = 1; j <= 30; j++) {
          let date2 = new Date();
          const currentMonth = date2.getMonth();
          date2.setDate(date2.getDate() - 9);
          date2.setDate(date2.getDate() + j);

          days.push({
            date: j,
            month: months[i - 1].month,
            appointments: [],
            dayOfTheWeek: date2.getDay(),
            monthName: months[i - 1].monthName,
            year: months[i - 1].year,
          });
          // console.log(
          //   `date: ${j}  month: ${months[i - 1].month} monthName: ${
          //     months[i - 1].monthName
          //   } Itteration:${j} monthItteration: ${i}`
          // );
        }
      }
      if (monthAmounts28.includes(month)) {
        for (let j = 1; j <= 28; j++) {
          let date2 = new Date();
          const currentMonth = date2.getMonth();
          date2.setDate(date2.getDate() - 10);
          date2.setDate(date2.getDate() + j);
          // console.log(date2.getDay(), "date2");
          if (j !== 3) {
            days.push({
              date: date2.getDate(),
              dayOfTheWeek: date2.getDay(),
              appointments: [],
              month: months[i - 1].month,
              monthName: months[i - 1].monthName,
              year: months[i - 1].year,
            });
          } else {
            days.push({
              date: date2.getDate(),
              dayOfTheWeek: date2.getDay(),
              appointments: [1],
              month: months[i - 1].month,
              monthName: months[i - 1].monthName,
              year: months[i - 1].year,
            });
          }

          // console.log(
          //   `date: ${j}  month: ${months[i - 1].month} monthName: ${
          //     months[i - 1].monthName
          //   } Itteration:${j} monthItteration: ${i}`
          // );
        }
      }

      correctMonth.push({
        year: months[i - 1].year,
        month: month,
        monthName: monthName,
        current: current,
        days: days,
      });
    }
    // console.log(correctMonth, months.length);
    setData(correctMonth);
  }, []);
  let shiftHeight = 0;
  if (bottomHeight === 1.5) {
    shiftHeight = onFocusShift ? -height * 0.4 : 0;
  }
  return (
    <View style={[styles.container, { top: shiftHeight }]}>
      <StatusBar
        animated={true}
        backgroundColor="#D4FFF6"
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <Image style={styles.imgback2} source={Dashboardpic} />
      <Text style={styles.heading}>Calendar</Text>
      {/* <FlatList
        horizontal={true}
        numColumns={1}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <CalendarItem
            setAddAppointmentMode={setAddAppointmentMode}
            bottomHeight={bottomHeight}
            setBottomHeight={setBottomHeight}
            moveBottomSheet={moveBottomSheet}
            dayarray={item.days}
            item={item}
          />
        )}
      /> */}
      <Agenda
        renderItem={(item, firstItemInDay) => {
          return (
            <View
              style={{
                width: "90%",
                height: height * 0.06,
                backgroundColor: "purple",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginTop: "auto",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>{JSON.stringify(item)}</Text>
            </View>
          );
        }}
        // renderEmptyDate={() => {
        //   return <View ><Text>asdasd</Text></View>;
        // }}

        renderEmptyData={() => {
          return (
            <View>
              <Text>asdasdas</Text>
            </View>
          );
        }}
        items={{
          "2022-11-22": [{ name: "item 1 - any js object" }],
          "2022-11-23": [{ name: "item 2 - any js object", height: 80 }],
          "2022-11-24": [{ name: "item 2 - any js object", height: 80 }],
          "2022-11-25": [
            { name: "item 3 - any js object" },
            { name: "any js object" },
          ],
          "2022-11-26": [{ name: "item 1 - any js object" }],
          "2022-11-27": [{ name: "item 2 - any js object", height: 80 }],
          "2022-11-28": [
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
            { name: "item 2 - any js object", height: 80 },
          ],
          "2022-11-29": [
            { name: "item 3 - any js object" },
            { name: "any js object" },
          ],
          "2022-11-30": [{ name: "item 1 - any js object" }],
          "2022-12-01": [{ name: "item 2 - any js object", height: 80 }],
          "2022-12-02": [{ name: "item 2 - any js object", height: 80 }],
          "2022-12-03": [
            { name: "item 3 - any js object" },
            { name: "any js object" },
          ],
          "2022-12-04": [{ name: "item 1 - any js object" }],
          "2022-12-05": [{ name: "item 2 - any js object", height: 80 }],
          "2022-12-06": [{ name: "item 2 - any js object", height: 80 }],
          "2022-12-07": [
            { name: "item 3 - any js object" },
            { name: "any js object" },
          ],
          "2022-12-08": [{ name: "item 1 - any js object" }],
          "2022-12-09": [{ name: "item 2 - any js object", height: 80 }],
          "2022-12-10": [{ name: "item 2 - any js object", height: 80 }],
          "2022-12-11": [
            { name: "item 3 - any js object" },
            { name: "any js object" },
          ],
        }}
        style={{ width: "100%" }}
      />

      {addAppointmentMode ? (
        <BottomSheetCalendar
          setAddAppointmentMode={setAddAppointmentMode}
          onFocusShift={onFocusShift}
          setFocusShift={setFocusShift}
          bottomHeight={bottomHeight}
          setBottomHeight={setBottomHeight}
          moveBottomSheet={moveBottomSheet}
        />
      ) : null}
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
