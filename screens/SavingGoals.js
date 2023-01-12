import { Pressable, View, Text, ScrollView, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import axios from "axios";
import * as Securestore from "expo-secure-store";
import { useEffect, useState } from "react";
import ProgressWidget from "../components/ProgressWidget";
export default function SavingGoals({ navigation }) {
  const [goals, Setgoals] = useState(null);
  const { height, width } = Dimensions.get("screen");
  async function getGoals() {
    const response = await axios
      .get("http://192.168.209.101:8000/api/savinggoals/", {
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
    <View>
      <Pressable
        onPress={async () => {
          navigation.navigate("CreateGoal");
        }}
      >
        <Text
          style={{
            fontSize: 25,
            left: width * 0.05,
            top: getStatusBarHeight() + height * 0.05,
          }}
        >
          +
        </Text>
      </Pressable>
      <ScrollView
        style={{
          top: getStatusBarHeight() + height * 0.05,
          height: height * 0.8,
          width: width * 0.9,
        }}
      >
        <View style={{ marginTop: getStatusBarHeight() + height * 0.275 }}>
          {goals != null &&
            goals.map((e) => (
              <View
                key={goals.indexOf(e)}
                style={{ marginBottom: getStatusBarHeight() + height * 0.15 }}
              >
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
      </ScrollView>
    </View>
  );
}
