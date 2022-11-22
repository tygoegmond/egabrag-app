import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

const AppointmentDateTimeSelect = ({
  coach,
  setAllDay,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  allDay,
  setTravelTime,
}) => {
  //declare states & Dimensions

  const { height, width } = Dimensions.get("screen");
  const [inlineOpen, setInlineOpen] = useState(false);
  const [inlineTimeOpen, setInlineTimeOpen] = useState(false);
  const [inlineOpenEnd, setInlineOpenEnd] = useState(false);
  const [inlineTimeOpenEnd, setInlineTimeOpenEnd] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0.25);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});

  //a toggle function for when the switch is flipped
  const toggleSwitch = () => {
    setAllDay((previousState) => !previousState);
    //changing the container height if allday is pressed
    containerHeight === 0.25
      ? setContainerHeight(0.2)
      : setContainerHeight(0.25);
  };
  
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

  function changeDate(e, from) {
    if (from === "start") {
      const newDate = new Date(e.nativeEvent.timestamp);
      setStartDate(newDate);
    }
    if (from === "end") {
      const newDate = new Date(e.nativeEvent.timestamp);
      setEndDate(newDate);
    }
  }

  async function inlineOpenSwap(from) {
    if (from === "date") {
      setContainerHeight(0.7);
      setInlineOpen(true);
      setInlineTimeOpen(false);
      setInlineTimeOpenEnd(false);
      setInlineOpenEnd(false);
      if (inlineOpen === true) {
        setInlineOpen(false);
        if (allDay) {
          setContainerHeight(0.2);
        } else {
          setContainerHeight(0.25);
        }
      }
    } else if (from === "time") {
      if (!allDay) {
        setContainerHeight(0.55);
      } else {
        setContainerHeight(0.5);
      }
      setInlineTimeOpen(true);
      setInlineOpen(false);
      setInlineTimeOpenEnd(false);
      setInlineOpenEnd(false);
      if (inlineTimeOpen === true) {
        setInlineTimeOpen(false);
        if (allDay) {
          setContainerHeight(0.2);
        } else {
          setContainerHeight(0.25);
        }
      }
    }
    if (from === "dateEnd") {
      setInlineOpenEnd(true);
      setInlineTimeOpenEnd(false);
      setInlineOpen(false);
      setInlineTimeOpen(false);
      if (inlineOpenEnd === true) {
        setInlineOpenEnd(false);
      }
    } else if (from === "timeEnd") {
      setInlineTimeOpenEnd(true);
      setInlineOpenEnd(false);
      setInlineOpen(false);
      setInlineTimeOpen(false);
      if (inlineTimeOpenEnd === true) {
        setInlineTimeOpenEnd(false);
      }
    }
  }
  const options = { month: "long" };
  const [month, setMonth] = useState(new Date().getMonth());
  const date = new Date();
  let fullDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const inlineStart = () => {
    if (inlineOpen) {
      // close time picker if date picker is open
      // if (inlineTimeOpen) {
      //   setInlineTimeOpen(false);
      // }

      // if (containerHeight !== 0.7 && containerHeight === 0.25 || containerHeight === 0.2) {
      //   setContainerHeight(0.7);
      // }

      return (
        <View style={styles.inlineStart}>
          {coach.details?.name ? (
            <Calendar
              customHeaderTitle={
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
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
                calendarBackground: "#f2f2f2f2",
                textSectionTitleColor: "#b6c1cd",
                textSectionTitleDisabledColor: "#d9e1e8",
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
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
              enableSwipeMonths={true}
              showWeekNumbers={true}
              style={styles.calendar}
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
          ) : (
            <DateTimePicker
              display="inline"
              style={styles.inlinedate}
              themeVariant="light"
              value={startDate}
              mode="date"
              onChange={(e) => {
                changeDate(e, "start");
              }}
            />
          )}
        </View>
      );
    } else {
      // if(allDay === false){
      //   if (containerHeight !== 0.25 && containerHeight === 0.7) {
      //     setContainerHeight(0.25);
      //     console.log("het is dicht maar het gaat tot 25")
      //   }
      // }
      return null;
    }
  };
  const inlineEnd = () => {
    if (inlineOpenEnd) {
      // close time picker if date picker is open
      // if (inlineTimeOpen) {
      //   setInlineTimeOpen(false);
      // }

      if (containerHeight !== 0.71 && containerHeight === 0.25) {
        setContainerHeight(0.71);
      }

      return (
        <View style={styles.inlineStart}>
          <DateTimePicker
            display="inline"
            style={styles.inlinedate}
            themeVariant="light"
            minimumDate={startDate}
            value={endDate}
            mode="date"
            onChange={(e) => {
              changeDate(e, "end");
            }}
          />
        </View>
      );
    } else {
      if (containerHeight !== 0.25 && containerHeight === 0.71) {
        setContainerHeight(0.25);
      }
      return null;
    }
  };

  const inlineStartTime = () => {
    if (inlineTimeOpen) {
      //close datepicker if time picker is open

      // if (
      //   (containerHeight !== 0.55 && containerHeight === 0.25) ||
      //   containerHeight === 0.2
      // ) {
      //   setContainerHeight(0.55);
      // }

      return (
        <View style={styles.inlineTimeStart}>
          <DateTimePicker
            display="spinner"
            style={styles.inlinetime}
            themeVariant="light"
            value={startDate}
            mode="time"
            onChange={(e) => {
              changeDate(e, "start");
            }}
          />
        </View>
      );
    } else {
      // if (isEnabled === false) {
      //   if (containerHeight !== 0.25 && containerHeight === 0.55) {
      //     setContainerHeight(0.25);
      //     console.log("het is dicht maar het gaat tot 25");
      //   }
      // }
      return null;
    }
  };
  const inlineEndTime = () => {
    if (inlineTimeOpenEnd) {
      //close datepicker if time picker is open

      if (containerHeight !== 0.551 && containerHeight === 0.25) {
        setContainerHeight(0.551);
      }

      return (
        <View style={styles.inlineTimeStart}>
          <DateTimePicker
            display="spinner"
            style={styles.inlinetime}
            themeVariant="light"
            value={endDate}
            mode="time"
            onChange={(e) => {
              changeDate(e, "end");
            }}
          />
        </View>
      );
    } else {
      if (containerHeight !== 0.25 && containerHeight === 0.551) {
        setContainerHeight(0.25);
      }
      return null;
    }
  };
  useEffect(() => {
    if (
      allDay &&
      inlineOpenEnd === false &&
      inlineOpen === false &&
      inlineTimeOpen === false &&
      inlineTimeOpenEnd === false
    ) {
      if (allDay && inlineOpen === true) {
        setContainerHeight(0.7);
      }

      setContainerHeight(0.2);
    } else {
      if (allDay && inlineOpen === false && inlineTimeOpen == false) {
        setContainerHeight(0.25);
      }
      setContainerHeight(0.25);
    }
  }, []);
  const endDateComponent = () => {
    return (
      <View style={styles.datePickerContainer}>
        <Text style={styles.datePickerText}>End</Text>
        <Pressable
          style={styles.datePickerComponent}
          onPress={() => {
            inlineOpenSwap("dateEnd");
          }}
        >
          <Text style={styles.datePickerComponentText}>
            {endDate.toDateString()}
          </Text>
        </Pressable>
        <Pressable
          style={styles.timePickerComponent}
          onPress={() => {
            inlineOpenSwap("timeEnd");
          }}
        >
          <Text style={styles.timePickerComponentText}>{timenowEnd}</Text>
        </Pressable>
      </View>
    );
  };

  let timenow = startDate.toTimeString().split(":");
  let timenowEnd = endDate.toTimeString().split(":");

  timenow = `${timenow[0]}:${timenow[1]}`;
  timenowEnd = `${timenowEnd[0]}:${timenowEnd[1]}`;

  return (
    <View style={[styles.dateContainer, { height: height * containerHeight }]}>
      <View style={[styles.switchContainer, { zIndex: 12 }]}>
        <Text style={styles.switchText}>All day</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#61CBB4" }}
          thumbColor={allDay ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#f2f2f2"
          onValueChange={toggleSwitch}
          value={allDay}
        />
      </View>
      <View style={[styles.datePickerContainer, { zIndex: 10 }]}>
        <Text style={styles.datePickerText}>Start</Text>

        <Pressable
          style={styles.datePickerComponent}
          onPress={() => {
            inlineOpenSwap("date");
          }}
        >
          <Text style={styles.datePickerComponentText}>
            {startDate.toDateString()}
          </Text>
        </Pressable>
        <Pressable
          style={styles.timePickerComponent}
          onPress={() => {
            inlineOpenSwap("time");
          }}
        >
          <Text style={styles.timePickerComponentText}>{timenow}</Text>

          {/* <DateTimePicker
                  display="compact"
                  style={styles.date}
                  themeVariant="light"
                  value={startDate}
                  mode="date"
                  onChange={(e) => {
                    changeDate(e);
                  }}
                /> */}
        </Pressable>
      </View>

      {inlineStart()}
      {inlineStartTime()}
      {allDay ? null : endDateComponent()}

      {inlineEnd()}
      {inlineEndTime()}
      <View style={styles.travelTimeContainer}>
        <Text style={styles.datePickerText}>Travel time</Text>
        <RNPickerSelect
          onValueChange={(value) => setTravelTime(value)}
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
          placeholder={{ label: "None ⇅", value: null }}
          items={[
            { label: "5 minutes", value: 5 },
            { label: "15 Minutes", value: 15 },
            { label: "30 minutes", value: 30 },
            { label: "1 hour", value: 60 },
            { label: "1 hour, 30 minutes", value: 90 },
            { label: "2 hours", value: 120 },
          ]}
        />
      </View>
    </View>
  );
};

export default AppointmentDateTimeSelect;
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  calendar: {
    width: width * 0.9,
    marginRight: width * 0.05,
  },
  inputIOS: {
    fontSize: 22,
  },
  timePickerComponentText: {
    fontSize: 17,
  },
  datePickerComponentText: {
    fontSize: 17,
  },

  timePickerComponent: {
    backgroundColor: "rgba(0,0,0,0.05)",
    width: width * 0.15,
    height: height * 0.045,
    borderRadius: width * 0.025,
    justifyContent: "center",
    alignItems: "center",
    marginRight: width * 0.05,
    elevation: 5,
  },
  datePickerComponent: {
    backgroundColor: "rgba(0,0,0,0.05)",
    width: width * 0.35,
    height: height * 0.045,
    borderRadius: width * 0.025,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: width * 0.01,
    elevation: 5,
  },
  inlineStart: {
    margin: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    width: width * 0.85,
    left: width * 0.05,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  inlineTimeStart: {
    margin: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    width: width * 0.85,
    left: width * 0.05,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  inlinedate: {
    height: height * 0.45,
    width: width * 0.85,
    marginRight: width * 0.05,
  },
  inlinetime: {
    height: height * 0.3,
    width: width * 0.85,
    marginRight: width * 0.05,
  },
  datePickerContainer: {
    flex1: 1,
    left: width * 0.05,
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.85,
    height: height * 0.06,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  travelTimeText: {
    color: "grey",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: width * 0.05,
  },

  travelTimeContainer: {
    flex1: 1,
    left: width * 0.05,
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.85,
    height: height * 0.06,
    flexDirection: "row",
  },
  datePickerText: {
    fontSize: 18,
    color: "#000",
  },
  switchText: {
    fontSize: 18,
    color: "#000",
  },

  switchContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.85,
    left: width * 0.05,
    height: height * 0.07,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  dateContainer: {
    flexDirection: "column",
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: height * 0.2,
    width: width * 0.9,
    top: height * 0.05,
    borderRadius: width * 0.04,
    backgroundColor: "#f2f2f2",
  },

  switch: { marginRight: width * 0.05 },
  title: {
    position: "absolute",
    fontSize: 20,
  },
  location: {
    position: "absolute",
    fontSize: 20,
  },
  titleLocation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: width * 0.9,
    top: height * 0.01,
    height: height * 0.13,
    borderRadius: width * 0.04,
    backgroundColor: "#f2f2f2",
    // backgroundColor: "grey"
  },
  singularInput1: {
    width: width * 0.85,
    fontSize: width * 0.05,
    fontWeight: "400",
    flex: 1,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    marginLeft: width * 0.05,
    // backgroundColor: "red",
    left: 0,
  },
  singularInput2: {
    width: width * 0.9,
    paddingHorizontal: width * 0.05,
    flex: 1,
    fontSize: width * 0.05,
    fontWeight: "400",
    // backgroundColor: "red",
    left: 0,
  },
  date: {
    width: width * 0.5,
    height: height * 0.2,
    marginRight: width * 0.05,
    borderRadius: 10,

    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputs: {
    width: width,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  closeContainer: {
    right: width * 0.34,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#493d8a",
    position: "absolute",
    top: height * -0.02,
    width: width * 0.2,
    height: height * 0.05,
  },
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "purple",
    top: 0,
    position: "absolute",
    left: 0,
  },
  close: {
    color: "#61CBB4",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    position: "absolute",
    // right: width * 0.4,
  },
  topPart: {
    backgroundColor: "red",
  },
  moveButton: {
    zIndex: 1000,
    paddingBottom: 10,
  },
  bottomSheetContainer: {
    height: height,
    transition: "all 0.5s ease",
    width: width,
    padding: 0,
    margin: 0,
    backgroundColor: "white",
    //shadow for the bottom sheet
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,

    position: "absolute",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  line: {
    width: width * 0.2,
    height: 5,
    backgroundColor: "grey",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: height * 0.02,
  },
});
