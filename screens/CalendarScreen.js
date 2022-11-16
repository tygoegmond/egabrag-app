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
import Dashboardpic from "../assets/images/background2.png";
import { getStatusBarHeight } from "react-native-status-bar-height";
import BottomSheetCalendar from "../components/BottomSheetCalendar";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import DayAgenda from "../components/DayAgenda";
const CalendarScreen = ({ navigation }) => {
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
  const options = { month: "long" };
  const [month, setMonth] = useState(new Date().getMonth());
  const date = new Date();
  let fullDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  async function changeMarkedDates(day) {
    let markedDatesTemp = markedDates;
    console.log(markedDatesTemp, "markedDatesTemp", "\n", day, "day");

    if (day.dateString in markedDates) {
      delete markedDatesTemp[day.dateString];
      // console.log(markedDatesTemp, "after delete");
      setMarkedDates(markedDatesTemp);
    } else {
      markedDatesTemp[day.dateString] = {
        selected: true,
        selectedColor: "blue",
      };
      setMarkedDates(markedDatesTemp);
      setInlineOpen(false);
      timeout(10);
      setInlineOpen(true);
    }
  }

  LocaleConfig.locales.fr = LocaleConfig.locales[""];
  LocaleConfig.locales.en = {
    monthNames:
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    monthNamesShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
      "_"
    ),
    dayNames: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    dayNamesShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    today: "Today",
  };
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});
  LocaleConfig.defaultLocale = "en";
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  function selectDay(day) {
    setSelectedDay(day);
    // changeMarkedDates(day);
    let startDateValue = new Date(day.dateString);
    const currentTime = new Date();
    startDateValue.setHours(currentTime.getHours());
    startDateValue.setMinutes(currentTime.getMinutes());
    setStartDate(startDateValue);
  }
  const [startDate, setStartDate] = useState(new Date());
  const colors = {
    background: "transparent",
    primary: "transparent",
  };
  return (
    <View style={[styles.container, { top: shiftHeight }]}>
      <StatusBar
        animated={true}
        backgroundColor="#D4FFF6"
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <Image style={styles.imgback2} source={Dashboardpic} />

      <View style={styles.calendar}>
        <Calendar
          customHeaderTitle={
            <Text
              style={{
                fontSize: 25,
                marginRight: width * 0.22,
                color: "#107070",
                fontWeight: "bold",
              }}
            >
              {new Intl.DateTimeFormat("en-US", options).format(
                month.timestamp
              )}{" "}
              {month.year}
            </Text>
          }
          onDayLongPress={(day) => {
            changeMarkedDates(day);
          }}
          theme={{
            backgroundColor: "black",
            calendarBackground: "transparent",
            textSectionTitleColor: "rgba(16, 112, 112, 1)",

            textSectionTitleDisabledColor: "blue",
            selectedDayBackgroundColor: "rgba(16, 112, 112, 1)",
            // selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "lightgrey",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "#61CBB4",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "blue",
            indicatorColor: "blue",

            textDayFontWeight: "bold",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 13,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 13,
          }}
          enableSwipeMonths={true}
          showWeekNumbers={true}
          style={styles.calendarStyle}
          initialDate={fullDate}
          minDate={fullDate}
          //change language
          monthFormat={"MMMM yyyy"}
          //change language

          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            selectDay(day);
          }}
          onMonthChange={(month) => {
            setMonth(month);
          }}
          markedDates={{
            ...markedDates,
            [selectedDay.dateString]: {
              selected: true,
              selectedColor: "#61CBB4",
              text: "red",
            },
          }}
        />
      </View>
      <View style={styles.agendaPart}>
        <DayAgenda date={selectedDay} />
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
      </View>

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
      <BottomDrawer navigation={navigation} />
    </View>
  );
};
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  flatlist: {
    top: getStatusBarHeight() + height / 10,
    width: width,
    height: height * 0.6,
    borderRadius: width / 20,
    //align container to the center of the flatlist
    alignSelf: "center",
  },
  calendar: {
    top: 0,
    height: height * 0.48,
    backgroundColor: "rgba(255,255,255,0.8)",
    width: width,
  },
  calendarStyle: {
    width: width,
    height: height * 0.22,
    top: getStatusBarHeight() + height * 0.01,
  },
  calendarContainer: {
    backgroundColor: "white",
    width: width,
    height: "fit-content",
    borderRadius: width / 20,
    //create shadow for the container
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: -2,
    },
    padding: width / 10,
    shadowOpacity: 0.5,
    zIndex: 12,
    shadowRadius: 11.84,
    elevation: 5,
  },

  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  agendaPart: {
    top: 0,

    width: width,
    flex: 1,
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

export default CalendarScreen;
