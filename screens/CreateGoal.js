import { Pressable, View, Text, Dimensions } from "react-native";
import * as Securestore from "expo-secure-store";
import { TextInput } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";

import axios from "axios";
export default function CreateGoal({ navigation }) {
  const [goalname, Setname] = useState("name");
  const [savedamount, Setsavedamount] = useState("saved amount");
  const [totalamount, Settotalamount] = useState("total amount");
  const { height, width } = Dimensions.get("screen");
  return (
    <View style={{ top: 100 }}>
      {goalname != null && (
        <TextInput
          defaultValue={goalname}
          onChangeText={(e) => {
            Setname(e);
          }}
        ></TextInput>
      )}
      {savedamount != null && (
        <TextInput
          defaultValue={savedamount}
          onChangeText={(e) => {
            Setsavedamount(e);
          }}
        ></TextInput>
      )}
      {totalamount != null && (
        <TextInput
          defaultValue={totalamount}
          onChangeText={(e) => {
            Settotalamount(e);
          }}
        ></TextInput>
      )}
      <Pressable
        onPress={async () => {
          const response = await axios
            .post(
              "http://192.168.209.101:8000/api/savinggoals/",
              {
                name: goalname,
                saved_amount: savedamount,
                total_amount: totalamount,
              },
              {
                headers: {
                  Accept: "application/json",
                  Authorization:
                    "Bearer " + (await Securestore.getItemAsync("token")),
                },
              }
            )
            .then(() =>
              navigation.reset({ index: 0, routes: [{ name: "Profile" }] })
            );
        }}
        style={{
          width: width * 0.28,
          backgroundColor: "#61CBB4",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
          height: height * 0.04,
          alignContent: "center",
          overflow: "hidden",
          left: width * 0.35,
          position: "absolute",
          top: getStatusBarHeight() + height * 0.1,
        }}
      >
        <Text style={{}}>Save goal</Text>
      </Pressable>
    </View>
  );
}
