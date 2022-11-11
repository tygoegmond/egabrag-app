import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Switch,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import LargeField from "./LargeField";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";

const BottomSheetCalendar = ({
  bottomHeight,
  moveBottomSheet,
  setBottomHeight,
  onFocusShift,
  setFocusShift,
}) => {
  const { height, width } = Dimensions.get("screen");
  const [isEnabled, setIsEnabled] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [endDateEnable, setEndDateEnable] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  
  function changeDate(e) {
    const newDate = new Date(e.nativeEvent.timestamp);
   setStartDate(newDate)
  }
  
  return (
    <View style={styles.page}>
      <View style={styles.topPart}></View>
      <View
        style={[styles.bottomSheetContainer, { top: height / bottomHeight }]}
      >
        <Pressable
          onPress={() => {
            moveBottomSheet(7);
          }}
          style={styles.moveButton}
        >
          <View style={styles.line}>
            <Pressable
              style={styles.closeContainer}
              onPress={() => {
                setBottomHeight(1);
              }}
            >
              <Text style={styles.close}>Cancel</Text>
            </Pressable>
          </View>
        </Pressable>
        <View style={styles.inputs}>
         

          {/* <LargeField
            title="Appointment name"
            position={1.3}
            onFocusShift={onFocusShift}
            setFocusShift={setFocusShift}
            setFunction={() => {}}
          /> */}

          <View style={styles.titleLocation}>
            <TextInput placeholder="Title" style={styles.singularInput1} />

            <TextInput placeholder="Location" style={styles.singularInput2} />
          </View>
          <View style={styles.dateContainer}>
            <View style={[styles.switchContainer, {zIndex: 12}]}>
              <Text style={styles.switchText}>All day</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#61CBB4" }}
                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#f2f2f2"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={[styles.datePickerContainer, {zIndex: 10}]}>
              <Text style={styles.datePickerText}>Start</Text>
              <DateTimePicker
                display="compact"
                style={styles.date}
                themeVariant="light"
                value={startDate}
                mode="datetime"
                onChange={(e) => {changeDate(e)}}
              />
            </View>
            <View style={styles.datePickerContainer}>
              <Text style={styles.datePickerText}>End</Text>
              <DateTimePicker
                disabled={false}
                display="compact"
                style={styles.date}
                themeVariant="light"
                value={new Date()}
                mode="datetime"
              />
            </View>
            <TouchableOpacity style={styles.travelTimeContainer}>
              <Text style={styles.datePickerText}>Travel time</Text>
              <Text style={styles.travelTimeText}>None ⇅</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomSheetCalendar;
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
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
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.85,
    left: width * 0.05,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  dateContainer: {
    flexDirection: "column",
    height: height * 0.25,
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
