import { Pressable, View, Text } from "react-native";
import * as Securestore from "expo-secure-store";
import { TextInput } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import axios from "axios";
export default function CreateGoal({ navigation }) {
  const [goalname, Setname] = useState("name");
  const [savedamount, Setsavedamount] = useState("saved amount");
  const [totalamount, Settotalamount] = useState("total amount");

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
          const response = await axios.post(
            "http://192.168.2.22:8000/api/savinggoals/",
            {
              name: goalname,
              saved_amount: savedamount,
              total_amount: totalamount,
              id: id,
            },
            {
              headers: {
                Accept: "application/json",
                Authorization:
                  "Bearer " + (await Securestore.getItemAsync("token")),
              },
            }
          );
          navigation.goBack();
        }}
        style={{ backgroundColor: "yellow", width: 50 }}
      >
        <Text>Save goal</Text>
      </Pressable>
    </View>
  );
}
