//import react / react native assets
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import React, { useCallback, useState, useRef } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Swiper from "react-native-swiper";
import axios from "axios";
import * as Securestore from "expo-secure-store";

//import assets

import loginBackground from "../assets/images/loginBackground.jpg";
import Global from "../assets/styles/Global";
import LargeField from "../components/LargeField";

//import expo assets
import { useFonts } from "expo-font";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

export default function Login({ navigation }) {
  //import fonts
  axios.defaults.headers.post["Accept"] = "application/json";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [res, setRes] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
    "great-escape": require("../assets/fonts/great-escape.ttf"),
  });

  const flatlistRef = useRef();
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    console.log(viewableItems[0].index, "test");
    setCurrentPage(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // login functions

  const logIn = async () => {
    try {
      const data = {
        email: email,
        password: password,
        device_name: "bruh",
      };
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      const response = await axios.post(
        "https://egabrag.tygoegmond.nl/api/sanctum/token",
        data,
        config
      );
      console.log(response.data, "response");
      navigation.navigate("Dashboard");
      setRes(response);
      updateSecurestore(response.data);

      // axios
      //   .post("127.0.0.1:8000/api/sanctum/token", data, config)
      //   .then((res) => {
      //     console.log(res);
      //     console.log("test")
      //     console.log(res.data);
      //     setRes(res)
      //     Securestore.setItemAsync("token", res.data.token);
      //     Securestore.setItemAsync("name", res.data.name);

      //   })
      //   .catch((error) => console.log(error));
    } catch (error) {
      setErrors("");
      console.log(error.response.data.errors);
      let errorMap = "";
      for (var key in error.response.data.errors) {
        console.log(key);
        console.log(error.response.data.errors[key]);
        if (errors !== error.response.data.errors[key][0]) {
          errorMap = errorMap + error.response.data.errors[key][0] + " ";
        }
      }
      setErrors(errorMap);
    }
  };

  async function updateSecurestore(resdata) {
    console.log(resdata, "dasdasdasd");
    await Securestore.setItemAsync("token", resdata);
  }
  //create press handlers
  const pressHandler = () => {
    navigation.navigate("Dashboard");
  };
  const log = () => {
    console.log(password);
  };

  
  let data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <View style={Global.container}>
      <View style={Global.container}>
        <Image style={styles.imgback2} source={loginBackground} />
        <View style={styles.imgback} />
        <Image
          style={styles.logo}
          source={require("../assets/images/medLogo.png")}
        />
        <View
          style={[
            Global.input,
            {
              marginTop: 0,
              bottom: getStatusBarHeight() + height / 3.5,
              position: "absolute",
            },
          ]}
        >
          <TextInput
            autoCapitalize="none"
            keyboardType={"email-address"}
            style={Global.largeField}
            onChangeText={(e) => setEmail(e)}
            name="Email"
            defaultValue={"me@tygoegmond.nl"}
          />
          <Text style={Global.placeholder}>Email</Text>
        </View>

        <LargeField
          type={"email"}
          position={2.65}
          title="Date"
          setFunction={setEmail}
          keyboardType={"email-address"}
        />
        <LargeField
          type={"email"}
          position={3.5}
          title="Email"
          setFunction={setEmail}
          keyboardType={"email-address"}
        />
        <LargeField
          type={"password"}
          position={5.1}
          title="Password"
          setFunction={setPassword}
          keyboardType={"password"}
        />
        <Text style={styles.error}>{errors}</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.listView}>
                <FlatList
                  onViewableItemsChanged={viewableItemsChanged}
                  viewabilityConfig={viewConfig}
                  pagingEnabled={true}
                  snapToAlignment={'center'}
                  ref={flatlistRef}
                  snapToInterval={1}
                  showsVerticalScrollIndicator={false}
                  bounces={false}
                  style={styles.list}
                  maxToRenderPerBatch={3}
                  horizontal={false}
                  data={data}
                  renderItem={({ item }) => (
                    <View style={styles.day}>
                      {/* singular on boarding screen word gerendered */}
                      <Text style={[styles.dayItem, {backgroundColor: currentPage == item ? "red" : "transparent"}]}>{item}</Text>
                    </View>
                  )}
                />
              </View>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Show Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        {/* <View
          style={[
            Global.input,
            {
              bottom: getStatusBarHeight() + height / 5.1,
              position: "absolute",
            },
          ]}
        >
        <TextInput
        style={Global.largeField}
        autoCapitalize="none"
        secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
            name="Password"
            defaultValue={"12345678"}
          />
          <Text style={Global.placeholder}>Password</Text>
        </View> */}
        <TouchableOpacity
          style={[
            Global.button,
            {
              bottom: getStatusBarHeight() + height / 8,
              position: "absolute",
            },
          ]}
          onPress={() => log()}
        >
          <Text style={Global.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//local stylesheet
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width * 0.8,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
  imgback: {
    flex: 1,
    width: width,
    height: height,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    bottom: getStatusBarHeight() + 120,
    position: "absolute",
    fontFamily: "great-escape",
  },
  logo: {
    width: width / 0.5,
    height: height / 4,
    resizeMode: "contain",
    poistion: "absolute",
    top: getStatusBarHeight() - 190,
    margin: 0,
  },
  error: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    bottom: getStatusBarHeight() - height / 3.5,
    left: 0,
    right: 0,
  },
  list: {
    height: height * 0.1,
  },
  listView: {
    height: height / 8.5,
  },
  dayItem: {
    fontSize: 30,
  },
});
