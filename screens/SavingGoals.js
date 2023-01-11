import { Pressable, View, Text } from "react-native";

import axios from "axios";
import * as Securestore from "expo-secure-store";
import { useEffect, useState } from "react";
import ProgressWidget from "../components/ProgressWidget";
export default function SavingGoals({ navigation }) {
  const [goals, Setgoals] = useState(null);
  async function getGoals() {
    const response = await axios
      .get("http://192.168.2.22:8000/api/savinggoals/", {
        headers: {
          Authorization: "Bearer " + (await Securestore.getItemAsync("token")),
          Accept: "application/json",
        },
      })
      .then((data) => {
        Setgoals(data.data);
      });
  }
  useEffect(() => {
    getGoals();
  }, []);

  return (
    <View
      style={{
        top: 200,
      }}
    >
      <Pressable
        onPress={async () => {
          navigation.navigate("CreateGoal");
        }}
      >
        <Text>+</Text>
      </Pressable>
      {goals != null &&
        goals.map((e) => (
          <View key={goals.indexOf(e)} style={{ margin: 100 }}>
            <Pressable
              onPress={(e) => {
                console.log(e);
              }}
            >
              <ProgressWidget
                onPress={async () => {
                  Object.entries(e).map(
                    async (e) =>
                      await Securestore.setItemAsync(
                        e[0].toString(),
                        e[1].toString()
                      )
                  );

                  navigation.navigate("EditGoals");
                }}
                navigation={navigation}
                goalTitle={e.name}
                endAmount={e.total_amount}
                amount={e.saved_amount}
              ></ProgressWidget>
            </Pressable>
          </View>
        ))}
    </View>
  );
}
