import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Switch,
  Pressable,
} from "react-native";
import Reac, { useState, useEffect } from "react";
import RNPickerSelect from "react-native-picker-select";

const CoachSelect = ({ setCoachListState, coach, setCoach, lastCoach }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0.1);
  const [coachType, setCoachType] = useState();
  const [coachText, setCoachText] = useState("Select Coach");

  useEffect(() => {
    coach.details?.name ? setCoachText(coach.details.name) : "Select Coach";
  }, [coach]);

  function toggleSwitch() {
    setIsEnabled((previousState) => !previousState);
    isEnabled ? setContainerHeight(0.1) : setContainerHeight(0.2);

    if (isEnabled) {
      console.log("disabled");
      setCoach({});
    } else {
      console.log("enabled");
      setCoach(lastCoach);
    }
  }

  return (
    <View style={[styles.coachContainer, { height: height * containerHeight }]}>
      <View
        style={[
          styles.switchContainer,
          { zIndex: 12, flex: isEnabled ? 0.3 : 1 },
        ]}
      >
        <Text style={styles.switchText}>Coaching appointment</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#61CBB4" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#f2f2f2"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {isEnabled ? (
        <View style={styles.coachInputContainer}>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerText}>Coach type</Text>
            <RNPickerSelect
              onValueChange={(value) => setCoachType(value)}
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
              placeholder={{ label: "Choose coach type", value: null }}
              items={[
                
                { label: "Mindfulness", value: "Mindfulness" },
                { label: "Financial Literacy", value: "Financial Literacy" },
              ]}
            />
          </View>
          {coachType ? (
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerText}>Coach</Text>
              <Pressable
                onPress={() => {
                  setCoachListState(true);
                }}
                style={styles.coachPressable}
              >
                <Text style={styles.selectCoachText}>{coachText}</Text>
              </Pressable>
            </View>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

export default CoachSelect;
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  coachSelectContainer: {
    position: "absolute",
    top: height * 0.01,
    backgroundColor: "white",
    zIndex: 10,
  },
  coachPressable: {
    marginRight: width * 0.05,
  },
  coachInputContainer: {
    flex: 1,
  },
  selectCoachText: {
    color: "grey",

    fontSize: 16,
    alignItems: "",
    alignContent: "center",
    alignItems: "center",

    fontWeight: "bold",
  },
  pickerText: {
    fontSize: 18,
    color: "#000",
  },
  pickerContainer: {
    flex1: 1,
    left: width * 0.05,
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.85,
    height: height * 0.06,
    flexDirection: "row",
  },
  switchText: {
    fontSize: 18,
    color: "#000",
  },
  switch: { marginRight: width * 0.05 },
  switchContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.85,
    left: width * 0.05,
    paddingVertical: height * 0.02,

    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  coachContainer: {
    backgroundColor: "#f2f2f2",

    width: width * 0.9,
    top: height * 0.03,
    borderRadius: height * 0.02,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "column",
  },
});
