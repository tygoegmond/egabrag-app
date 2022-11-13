import { View, Text, StyleSheet, Dimensions, FlatList, Pressable, } from "react-native";
import React, { useState} from "react";
import CoachCard from "./CoachCard";

const CoachList = ({setCoachListState, setCoach}) => {
  
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
              { name: "Devin James", email: "DevinJames@outlook.com", website: "www.DevinJamesCoaching.com", type: "Mindfulness" },
              { name: "Jackson Larry", email: "JacksonLarry@outlook.com", website: "www.JacksonLarryCoaching.com", type: "Mindfulness" },
            { name: "James Fowler", email: "JamesFowler@outlook.com", website: "www.JamesFowlerCoaching.com", type: "Mindfulness" },
            { name: "Joel Mckenzie", email: "JoelMckenzie@outlook.com", website: "www.JoelMckenzieCoaching.com", type: "Mindfulness" },
            { name: "John Lillard", email: "JohnLillard@outlook.com", website: "www.JohnLillardCoaching.com", type: "Mindfulness" },
            { name: "Jillian Rose", email: "JillianRose@outlook.com", website: "www.JillianRoseCoaching.com", type: "Mindfulness" },
            { name: "Jimmy Fallon", email: "JimmyFallon@outlook.com", website: "www.JimmyFallonCoaching.com", type: "Mindfulness" },
            { name: "Julie Crowder", email: "JulieCrowder@outlook.com", website: "www.JulieCrowderCoaching.com", type: "Mindfulness" },
          ]}
          renderItem={({ item }) => <CoachCard setCoachListState={setCoachListState}setCoach={setCoach} item={item}/>}
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
