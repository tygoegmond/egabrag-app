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
import TwoFieldDate from "../components/TwoFieldDate";
import TwoFieldStudy from "../components/TwoFieldStudy";

//import assets
import CheckBoxField from "../components/CheckBoxField";
import loginBackground from "../assets/images/createUser.jpg";
import Global from "../assets/styles/Global";
import LargeField from "../components/LargeField";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
//import expo assets
import { useFonts } from "expo-font";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import DateSpinner from "../components/DateSpinner";
import { set } from "react-native-reanimated";

export default function Login({ navigation }) {
  //import fonts
  axios.defaults.headers.post["Accept"] = "application/json";
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const [mode, setMode] = React.useState(true);
  const [password, setPassword] = useState("");
  const [education, setEducation] = useState("");
  const [grade, setGrade] = useState("");
  const [errors, setErrors] = useState("");
  const [date, setDate] = useState(new Date());
  const [newsletter, setNewsletter] = useState(false);
  const [terms, setTerms] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [res, setRes] = useState();
  const [nationality, setNationality] = useState("");
  const [birthdate, setBirthdate] = useState();
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
  const createUserAccount = async () => {
    // navigation.navigate("Interests");
    const data = {
      name: fullName,
      email: email,
      password: password,
      device_name: "test",
      dob: date,
      nationality: nationality,
      school: education,
      school_grade: grade,
      // newsletter: newsletter,
      // terms: terms,
    };
    console.log(data);
    try {
      const response = await axios.post(
        "https://egabrag.tygoegmond.nl/api/sanctum/register",
        data
      );

      console.log(response);
      console.log(response.data);
      setRes(response);
      updateSecurestore(response.data);
      navigation.navigate("Interests");
    } catch (error) {
      console.log(error);
    }
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
          source={require("../assets/images/logoDark.png")}
        />
        <View style={styles.form}>
          <LargeField
            type={"name"}
            position={1.385}
            title="Full name"
            setFunction={setFullName}
          />
          <TwoFieldDate
            type={"name"}
            position={1.59}
            title="Birth date"
            title2="Nationality"
            setFunction={setNationality}
            setFunction2={setBirthdate}
            keyboardType={"email-address"}
            setMode={setMode}
            mode={mode}
            date={date}
            setDate={setDate}
          />
          <TwoFieldStudy
            type={"Education"}
            position={1.87}
            title="School"
            title2="Study / Grade"
            setFunction={setEducation}
            setFunction2={setGrade}
            keyboardType={"default"}
          />
          <LargeField
            type={"email"}
            position={2.26}
            title="Email"
            setFunction={setEmail}
            keyboardType={"email-address"}
          />
          <LargeField
            type={"password"}
            position={2.86}
            title="Password"
            setFunction={setPassword}
            keyboardType={"password"}
          />
        </View>
        <CheckBoxField
          top={0.7}
          style={styles.checkBox}
          text="Subscribe to the newsletter"
          checked={newsletter}
          setChecked={setNewsletter}
        />
        <CheckBoxField
          top={0.76}
          style={styles.checkBox}
          text="Agree to terms of service"
          checked={terms}
          setChecked={setTerms}
        />
        <Text style={styles.error}>{errors}</Text>

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
              bottom: getStatusBarHeight() + height * 0.05,
              position: "absolute",
            },
          ]}
          onPress={() => createUserAccount()}
        >
          <Text style={Global.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      {mode ? null : <DateSpinner date={date} setDate={setDate} />}
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
  form: {
    flex: 1,
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    top: height * 0.1,
  },
  checkBox: {
    marginTop: height * 0.1,
    position: "absolute",
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
    top: height * -0.33,
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
