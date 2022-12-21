import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Securestore from "expo-secure-store";
import loginBackground from "../assets/images/createUser.jpg";
import axios from "axios";
import InterestItem from "../components/InterestItem";
import { FlatList } from "react-native-gesture-handler";
import Global from "../assets/styles/Global";
export default function Interests({navigation}) {
  const [re, setRe] = useState("");
  const [user, setUser] = useState("");
  const [selected, setSelected] = useState([]);
  const [update, setUpdate] = useState([]);
  const [interestList, setInterestList] = useState([
    { id: 1, name: "Yoga" },
    { id: 2, name: "Meditation" },
    { id: 3, name: "Sports" },
    { id: 4, name: "Investing" },
    { id: 5, name: "Stocks" },
    { id: 6, name: "Tax" },
    { id: 7, name: "School" },
    { id: 8, name: "Books" },
    { id: 9, name: "Mindfulness" },
    { id: 10, name: "Finance" },
    { id: 11, name: "Cooking" },
  ]);
  async function UpdateInterests() {
    console.log(await Securestore.getItemAsync("interests"), "test")
    
    let interestsString = await Securestore.getItemAsync("interests");
    if(interestsString == null){
        return
    }
    let interestArray = []
    let id = 1;
    let interests = JSON.parse(interestsString);

    setSelected(interests);

    console.log(interestArray, "interests")
    
    // setInterestList(await Securestore.getItemAsync("token"))
  }
useEffect(() => {
    UpdateInterests();
    }, []);


  async function getUserData() {
    try {
      console.log(await Securestore.getItemAsync("token"));
      const response = await axios.get(
        "https://egabrag.tygoegmond.nl/api/user",
        {
          headers: {
            Authorization:
              "Bearer " + (await Securestore.getItemAsync("token")),
            Accept: "application/json",
          },
        }
      );
      console.log(response.data);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  const saveInterests = async () => {
    try {
        let selectedString = JSON.stringify(selected);
        console.log(selectedString, "selectedString")
        await Securestore.setItemAsync("interests", selectedString);
        // const response = await axios.post(
        //     "https://egabrag.tygoegmond.nl/api/user/interests",
        //     {
        //         interests: selected,
        //     },
        //     {
        //         headers: {
        //             Authorization:
        //                 "Bearer " + (await Securestore.getItemAsync("token")),
        //             Accept: "application/json",
        //         },
        //     }
        // );
        // console.log(response.data);
     
        navigation.replace("Dashboard");
    } catch (error) {
        console.log(error);
    }
    };

  useEffect(() => {
    Securestore.getItemAsync("token").then((token) => {
      setRe(token);
    });
    let data = getUserData();
  }, []);
  useEffect(() => {
    console.log(selected);
    setUpdate(selected);
  }, [selected]);

//   const List = interestList.map((item) => {
//     return (
//       <View key={item.id} style={styles.ListItem}>
//         <InterestItem
//           name={item.name}
//           selected={selected}
//           setSelected={setSelected}
//         />
//       </View>
//     );
//   });

  return (
    <View style={styles.container}>
      <Image style={styles.imgback2} source={loginBackground} />
      <Text style={styles.heroText}>What do you want to see?</Text>
      <FlatList
        data={interestList}
        contentContainerStyle={{
            alignSelf: "center",
            flexDirection: "column",
            flex: 1,
            justifyContent: "flex-start",
            top: height * 0.2,
            width: width * 0.9,
        }}
        renderItem={({ item }) => (
            <InterestItem
            name={item.name}
            selected={selected}
            setSelected={setSelected}
            id={item.id}
            />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            extraData={[...selected]}
      />
       <TouchableOpacity style={[Global.button, { top: 500 }]} onPress={saveInterests}>
        <Text style={Global.buttonText}>Save interests</Text>
      </TouchableOpacity>
      {/* <ScrollView style={styles.List}>{List}</ScrollView> */}
    </View>
  );
}
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  List: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "white",
    alignContent: "flex-start",
    width: width,
    height: height * 0.7,
    top: height * 0.1,

    //align content next to each other
  },
  ListItem: {
    backgroundColor: "red",
    height: height * 0.05,
  },
  imgback2: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
    width: width,
    height: height,
  },
  heroText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    zIndex: 1,
    top: height * 0.1,
    //text shadow
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    width: width * 0.8,
    padding: width * 0.05,
    left: width * 0.05,
  },
});
