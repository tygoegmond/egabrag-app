import { View, Text, StyleSheet, Dimensions, FlatList, Pressable, } from "react-native";
import React, { useState} from "react";
import CoachCard from "./CoachCard";

const CoachList = ({setCoachListState, setLastCoach, setCoach}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Pressable onPress={() => {
            setCoachListState(false)
        }}>
        <Text style={styles.cancel}>Cancel</Text>
        </Pressable>
        <Text style={styles.listTitle}>Coach List</Text>
      </View>
      <View style={styles.ListContainer}>
        <FlatList
          style={styles.list}
          data={[
              { name: "A. Baino", organization: "Classy Notes", website: "https://www.cn-lawfinancegroup.com/", type: "Financial Literacy", availability: [1,2,4] },
              { name: "J. Schmidt", organization: "1 met jezelf", website: "https://www.1metjezelf-coaching.com/Coaching/", type: "Mindfulness", availability: [1,2,4] },
           
          ]}
          renderItem={({ item }) => <CoachCard setLastCoach={setLastCoach} setCoachListState={setCoachListState}setCoach={setCoach} item={item}/>}
        />
      </View>
    </View>
  );
};

export default CoachList;
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  list: {
    width: width,
    height: height * 0.5,
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
  ListContainer: {
    flex: 1,
    marginBottom: 100,
  
    width: width,
    
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    top: height / 10,
    zIndex: 11,
    position: "absolute",
    width: width,
    height: height * 0.9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
