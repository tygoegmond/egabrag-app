import { View, Text, Dimensions, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import LargeField from "./LargeField";

const BottomSheetCalendar = ({
  bottomHeight,
  moveBottomSheet,
  setBottomHeight,
  onFocusShift,
  setFocusShift,
}) => {
  const { height, width } = Dimensions.get("screen");


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
              <Text style={styles.close}>Close</Text>
            </Pressable>
          </View>
        </Pressable>
        <View style={styles.inputs}>
          <Text style={[styles.bottomText, {marginTop: height * 0.01}]}>Select a date from the calendar</Text>
   
          <LargeField title="Appointment name" position={1.3} onFocusShift={onFocusShift} setFocusShift={setFocusShift} setFunction={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default BottomSheetCalendar;
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
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
    fontSize: 17,
    fontWeight: "bold",
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
