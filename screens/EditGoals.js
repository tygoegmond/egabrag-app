import { Pressable, View, Text, Dimensions } from "react-native";
import * as Securestore from "expo-secure-store";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { TextInput } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import axios from "axios";
export default function EditGoal({ navigation }) {
  const { height, width } = Dimensions.get("screen");
  const [createdat, Setcreatedat] = useState(null);
  const [id, Setid] = useState(null);
  const [goalname, Setname] = useState(null);
  const [savedamount, Setsavedamount] = useState(null);
  const [totalamount, Settotalamount] = useState(null);
  useEffect(() => {
    (async () => {
      const created_help = await Securestore.getItemAsync("created_at");
      Setcreatedat(created_help);
      const id_help = await Securestore.getItemAsync("id");
      Setid(id_help);
      const name_help = await Securestore.getItemAsync("name");
      Setname(name_help);
      const saved_help = await Securestore.getItemAsync("saved_amount");
      Setsavedamount(saved_help);
      const total_help = await Securestore.getItemAsync("total_amount");
      Settotalamount(total_help);

      // console.log(createdat);
      // console.log(goalname);
      // console.log(savedamount);
      // console.log(totalamount);
      // console.log(id);
    })();
  }, []);
  return (
    <View style={{ top: 100 }}>
      {/* {createdat != null && (
        <TextInput
          defaultValue={createdat}
          onChangeText={(e) => {
            console.log(e);
            Setcreatedat(e);
          }}
        ></TextInput>
      )}
      {id != null && (
       
          <TextInput
            defaultValue={id}
            onChangeText={(e) => {
              Setid(e);
            }}
          ></TextInput>
       
      )} */}
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
          const response = await axios.patch(
            "http://192.168.209.101:8000/api/savinggoals/",
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
          left: width * 0.15,
          position: "absolute",
          top: getStatusBarHeight() + height * 0.1,
        }}
      >
        <Text>Save goal</Text>
      </Pressable>
      <Pressable
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
          left: width * 0.5,
          position: "absolute",
          top: getStatusBarHeight() + height * 0.1,
        }}
        onPress={async () => {
          const response = await axios.delete(
            "http://192.168.209.101:8000/api/savinggoals/",
            {
              data: {
                name: goalname,
                saved_amount: savedamount,
                total_amount: totalamount,
                id: id,
              },
              headers: {
                Accept: "application/json",
                Authorization:
                  "Bearer " + (await Securestore.getItemAsync("token")),
              },
            }
          );
          navigation.goBack();
        }}
      >
        <Text>Verwijder Goal</Text>
      </Pressable>
    </View>
  );
}
