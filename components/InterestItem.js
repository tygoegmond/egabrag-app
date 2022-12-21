import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function InterestItem({ name, selected, setSelected, id, mode }) {
    
    const [update, setUpdate] = useState(false);
    console.log(selected, "selected", selected.includes(name), "asdasdasdasdasds", name, "name", id, "id")
  if (selected.includes(name)) {
    var color = "#107070";
    var textColor = "white";
  } 
  else {
      var color = "white";
      var textColor = "black";
    }
    if (mode === "widget") {
        var color = "white";
        var textColor = "black";
      }
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const selectItem = async () => {
    if (mode == "widget") {
        return;
    }
    console.log(selected, "selected", selected.includes(name));
    if (selected.includes(name)) {
      let tempArray = selected;
      console.log(tempArray, "tempArray1");
      const index = tempArray.indexOf(name);
        console.log(index, "index");
      tempArray.splice(index, 1);
      console.log(tempArray, "tempArray2");
      setSelected(tempArray);
    }
   
    if (!selected.includes(name)) {
      
      setSelected(selected => [...selected, name]);
    }
  };

  const deleteItemArray = async (array, name) => {
    if (mode == "widget") {
        return;
    }
    if(array.includes(name)) {

        console.log(array, "array", name, "name")
        array.splice(array.indexOf(name), 1);
        setSelected(array);
        await timeout(100);
        setUpdate(!update);
    }
  }

    
  return (
    <View style={[styles.InterestItem, { backgroundColor: color }]}>
      <Pressable onPress={() => selectItem(name)}>
        <Text style={[styles.name, { color: textColor }]}>{name}</Text>
      </Pressable>
      <Pressable
        style={{ width: width * 0.08 }}
        onPress={() => deleteItemArray(selected, name)}
      >
        <Text style={[styles.x, { color: textColor }]}>x</Text>
      </Pressable>
    </View>
  );
}
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  InterestItem: {
    height: height * 0.04,
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 25,

    alignItems: "center",
    justifyContent: "center",
    margin: width * 0.015,
    paddingHorizontal: width * 0.02,
    borderColor: "#107070",
    borderWidth: 2,
  },
  x: {
    color: "grey",
    fontSize: 20,
    marginLeft: width * 0.03,
    marginRight: width * 0.01,
    //align vertically and horizontally
    alignSelf: "center",

    justifyContent: "center",
  },
  name: {
    color: "black",
    fontSize: 17,
  },
});
