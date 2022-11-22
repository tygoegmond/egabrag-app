import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppointmentDateTimeSelect from "./AppointmentDateTimeSelect";
import CoachSelect from "./CoachSelect";
import CoachList from "./CoachList";
import AlertMe from "./AlertMe";
import { LocaleConfig } from "react-native-calendars";

//Config for locale fomrmatting for calendar

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

//
const BottomSheetCalendar = ({ setAddAppointmentMode }) => {
  const API_URL = "https://egabrag.tygoegmond.nl/api";
  //config for intl date formatting
  const options = { month: "long" };
  //declaring screen dimensions
  const { height, width } = Dimensions.get("screen");
  //Declaring states

  const [coachListState, setCoachListState] = useState(false);
  const [coach, setCoach] = useState({});
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [lastCoach, setLastCoach] = useState({});
  const [month, setMonth] = useState(new Date().getMonth());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [travelTime, setTravelTime] = useState(0);
  const [allDay, setAllDay] = useState(false);
  const [alert, setAlert] = useState(false);
  const [response, setResponse] = useState("");

  //declaring date and fullDate variables
  const date = new Date();
  let fullDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  //function to Calculate difference between 2 timestamps. returns time in minutes

  function durationCalc(timestamp1, timestamp2) {
    let difference = timestamp1 - timestamp2;
    let minuteDifference = Math.floor(difference / 1000 / 60);

    return minuteDifference;
  }

  //post handler function for posting appointments to the database

  async function postAppointment() {
    let coachValue;
    let duration;
    //if coach is not selected, set coachValue to null else set it to the current coach
    coach === {} ? (coachValue = null) : (coachValue = coach);
    //if allDay is true, set duration to 0 minutes else calculate the duration
    allDay ? (duration = 0) : (duration = durationCalc(startDate, endDate));

    //declare data object to be posted

    const data = {
      startTime: startDate,
      location: location,
      title: title,
      coach: coachValue,
      travelTime: travelTime,
      duration: duration * -1,
      allDay: allDay,
      alert: alert,
    };

    //post data to the database using axios fetch

    try {
      const response = await axios.post(`${API_URL}/appointments`, {
        headers: {
          Authorization: "Bearer " + (await Securestore.getItemAsync("token")),
          Accept: "application/json",
        },
        body: data,
      });
      console.log(response.data);
      setResponse(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  // render actual bottomsheet page
  return (
    <View style={styles.page}>
      {coachListState ? (
        <CoachList
          setCoach={setCoach}
          setLastCoach={setLastCoach}
          setCoachListState={setCoachListState}
        />
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
          <Pressable
            onPress={() => {
              postAppointment();
            }}
          >
            <Text style={styles.listTitle}>Make Appointment</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.bottomPart}>
          <View style={styles.inputs}>
            <View style={styles.titleLocation}>
              <TextInput
                onChangeText={(e) => setTitle(e)}
                placeholder="Title"
                style={styles.singularInput1}
              />
              <TextInput
                onChangeText={(e) => setLocation(e)}
                placeholder="Location"
                style={styles.singularInput2}
              />
            </View>
            <CoachSelect
              coach={coach}
              lastCoach={lastCoach}
              setLastCoach={setLastCoach}
              setCoach={setCoach}
              setCoachListState={setCoachListState}
            />
            <AppointmentDateTimeSelect
              allDay={allDay}
              setAllDay={setAllDay}
              setTravelTime={setTravelTime}
              endDate={endDate}
              setEndDate={setEndDate}
              startDate={startDate}
              setStartDate={setStartDate}
              coach={coach}
            />
            <AlertMe setAlert={setAlert} alert={alert} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default BottomSheetCalendar;
//declaring styles & dimensions
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
  },
  singularInput1: {
    width: width * 0.85,
    fontSize: width * 0.05,
    fontWeight: "400",
    flex: 1,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    marginLeft: width * 0.05,
    left: 0,
  },
  singularInput2: {
    width: width * 0.9,
    paddingHorizontal: width * 0.05,
    flex: 1,
    fontSize: width * 0.05,
    fontWeight: "400",
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
  inputs: {
    width: width,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
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
  bottomSheetContainer: {
    height: height * 0.9,
    flex: 0.93,
    transition: "all 0.5s ease",
    width: width,
    padding: 0,
    margin: 0,
    backgroundColor: "white",
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
});
