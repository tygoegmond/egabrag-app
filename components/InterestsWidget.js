import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import InterestItem from "./InterestItem";
import axios from "axios";
import * as Securestore from "expo-secure-store";
export default function InterestsWidget({ navigation }) {
  const [selected, setSelected] = useState([]);

  async function UpdateInterests() {
    console.log(await Securestore.getItemAsync("interests"), "test");
    var interestsString = await Securestore.getItemAsync("interests");
    let interestArray = [];
    let id = 1;
    let interests = JSON.parse(interestsString);
    setSelected(interests);

    console.log(interestArray, "interests");

    // setInterestList(await Securestore.getItemAsync("token"))
  }

  useEffect(() => {
    UpdateInterests();
  }, []);

  return (
    <View style={styles.InterestsWidget}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={styles.header}>My Interests</Text>
        <Pressable onPress={() => navigation.navigate("Interests")}>
          <Text style={styles.edit}>View all</Text>
        </Pressable>
      </View>
      <FlatList
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={selected}
        renderItem={({ item }) => (
          <InterestItem
            selected={selected}
            setSelected={setSelected}
            name={item}
            mode="widget"
          />
        )}
      />
    </View>
  );
}
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  InterestsWidget: {
    height: height * 0.15,
    width: width / 1.2,
    borderRadius: 25,
    backgroundColor: "white",

    //alignItems: "left",
    padding: width * 0.05,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#107070",
    alignSelf: "center",
    marginBottom: height * 0.01,
  },
  edit: {
    float: "right",
    fontSize: 15,

    //align vertically
    alignSelf: "center",

    color: "#107070",
    marginBottom: height * 0.01,
  },
});
