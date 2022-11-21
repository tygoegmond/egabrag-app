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
import Dashboardpic from "../assets/images/background2.png";
import { getStatusBarHeight } from "react-native-status-bar-height";
import BottomSheetCalendar from "../components/BottomSheetCalendar";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import DayAgenda from "../components/DayAgenda";

const CalendarScreen = ({navigation}) => {

  //declare states

  const [data, setData] = useState([]);
  const [bottomHeight, setBottomHeight] = React.useState(1);
  const [onFocusShift, setFocusShift] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [addAppointmentMode, setAddAppointmentMode] = useState(false);
  const [coach, setCoach] = useState({});
  const [lastCoach, setLastCoach] = useState({});
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});
  const [month, setMonth] = useState(new Date().getMonth());
  const [appointments, setAppointments] = useState(
    {
    "2022-11-29": [{
      startTime: null,
      location: "Almere",
      title: "Jake's 18th Birthday",
      coach: null, 
      travelTime: null,
      duration: null,
      allDay: true,
      alert: null,
    },{
      startTime: "11:00",
      location: "Almere",
      title: "Coaching session",
      coach:  { name: "A. Baino", organization: "Classy Notes", website: "https://www.cn-lawfinancegroup.com/", type: "Financial Literacy", availability: [1,2,4] }, 
      travelTime: "30 min",
      duration: 120,
      allDay: false,
    },{
      startTime: "12:00",
      location: "Almere",
      title: "Dentist Appointment",
      coach: null, 
      travelTime: "30 min",
      duration: 120,
      allDay: false,
    }],
    "2022-11-17": [{
      startTime: "11:00",
      location: "Almere",
      title: "Coaching session",
      coach:  { name: "J. Schmidt", organization: "1 met jezelf", website: "https://www.1metjezelf-coaching.com/Coaching/", type: "Mindfulness", availability: [1,2,4] },
      travelTime: "30 min",
      duration: 120,
      allDay: false,
    },{
      startTime: "12:00",
      location: "Almere",
      title: "Biking trip",
      coach: null, 
      travelTime: "30 min",
      duration: 120,
      allDay: false,
    }]
  })
  
  //function to make bottomsheet appear
  
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

  //
  let shiftHeight = 0;
  if (bottomHeight === 1.5) {
    shiftHeight = onFocusShift ? -height * 0.4 : 0;
  }
  const options = { month: "long" };
 
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
  //config for formatting calendar dates and days

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
            setAddAppointmentMode(true);
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
        <DayAgenda  fullDate={fullDate} appointments={appointments} coach={coach} setAddAppointmentMode={setAddAppointmentMode}date={selectedDay}/>
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
          lastCoach={lastCoach}
          setLastCoach={setLastCoach}
          coach={coach}
          setCoach={setCoach}
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

export default CalendarScreen;