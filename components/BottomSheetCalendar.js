import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Switch,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import AppointmentDateTimeSelect from "./AppointmentDateTimeSelect";
import CoachSelect from "./CoachSelect";
import CoachList from "./CoachList";
import { LocaleConfig } from "react-native-calendars";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

LocaleConfig.locales.en = {
  monthNames:
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ),
  monthNamesShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  dayNames: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
    "_"
  ),
  dayNamesShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  today: "Today",
};
LocaleConfig.defaultLocale = "en";
const BottomSheetCalendar = ({ setAddAppointmentMode }) => {
  const options = { month: "long" };
  const { height, width } = Dimensions.get("screen");
  const [coachListState, setCoachListState] = useState(false);
  const [coach, setCoach] = useState({});
  const [lastCoach, setLastCoach] = useState({});
  const [month, setMonth] = useState(new Date().getMonth());
  const date = new Date();
  let fullDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return (
    <View style={styles.page}>
      {coachListState ? (
        <CoachList setCoach={setCoach} setLastCoach={setLastCoach} setCoachListState={setCoachListState} />
      ) : null}
      <View style={[styles.bottomSheetContainer, { top: height / 10 }]}>
        <View style={styles.topPart}>
          <Pressable
            onPress={() => {
              setAddAppointmentMode(false);
            }}
          >
            <Text style={styles.cancel}>Cancel</Text>
          </Pressable>
          <Text style={styles.listTitle}>Make Appointment</Text>
        </View>
        <ScrollView style={styles.bottomPart}>
          <View style={styles.inputs}>
            <View style={styles.titleLocation}>
              <TextInput placeholder="Title" style={styles.singularInput1} />
              <TextInput placeholder="Location" style={styles.singularInput2} />
            </View>
            <CoachSelect coach={coach} lastCoach={lastCoach} setLastCoach={setLastCoach} setCoach={setCoach} setCoachListState={setCoachListState} />
            <AppointmentDateTimeSelect coach={coach}/>
            
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default BottomSheetCalendar;
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  calendar: {
    width: width * 0.9,
    height: height * 0.3,
    marginBottom: height * 0.5,
  },
  cancel: {
    fontWeight: "400",
    fontSize: 19,
    color: "#61CBB4",
    left: width * 0.05,
  },
  listTitle: {
    fontWeight: "400",
    fontSize: 19,
    color: "#61CBB4",
    right: width * 0.05,
  },
  bottomPart: {
    flex: 0.93,
  },
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
    flex: 0.07,
    marginBottom: "auto",
    borderTopLeftRadius: height * 0.02,
    borderTopRightRadius: height * 0.02,
  },
  moveButton: {
    zIndex: 1000,
    paddingBottom: 10,
  },
  bottomSheetContainer: {
    height: height * 0.9,
    flex: 0.93,
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
