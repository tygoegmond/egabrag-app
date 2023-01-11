import { Pressable, View, Text } from "react-native";
import * as Securestore from "expo-secure-store";
import { TextInput } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import axios from "axios";
export default function EditGoal({ navigation }) {
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
        style={{ backgroundColor: "yellow", width: 100, marginBottom: 20 }}
      >
        <Text>Save goal</Text>
      </Pressable>
      <Pressable
        style={{ backgroundColor: "red", width: 100 }}
        onPress={async () => {
          const response = await axios.delete(
            "http://192.168.2.22:8000/api/savinggoals/",
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
