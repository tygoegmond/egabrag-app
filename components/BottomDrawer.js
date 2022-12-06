//importing react / react native assets
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Progress,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import houseIcon from "../assets/images/houseIcon3.png";
import ebookIcon from "../assets/images/ebookIcon3.png";
import calendarIcon from "../assets/images/calendarIcon.png";
import profileIcon from "../assets/images/profile3.png";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
//creating navigation dots for on boarding component

export default BottomDrawer = ({ navigation }) => {
  const data = [
    {
      icon: houseIcon,
      label: "Dashboard",
    },
    {
      icon: ebookIcon,
      label: "AllEbooks",
    },
    {
      icon: calendarIcon,
      label: "CalendarScreen",
    },
    {
      icon: profileIcon,
      label: "Profile",
    },
  ];

  const bottomTabs = data.map((item) => {
    return (
      <Pressable
        key={item.label}
        onPress={() => navigation.navigate(item.label)}
      >
        <View style={styles.bottomTab} key={item.icon}>
          <Image source={item.icon} style={styles.bottomTabIcon} />
        </View>
      </Pressable>
    );
  });

  return (
    <View
      style={{
        flexDirection: "row",
        width: width,
        height: height / 11,
        justifyContent: "center",
        position: "absolute",
        backgroundColor: "white",
        zIndex: 111,
        flex: 1,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //shadow
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      {bottomTabs}
    </View>
  );
};

//local stylesheet
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      dot: {
        position: "relative",
        height: 10,
        borderRadius: 8,
        backgroundColor: "#493d8a",
        marginHorizontal: 8,
      },
      bottomTabIcon: {
        width: width * 0.08,
        height: width * 0.08,
        resizeMode: "contain",
        // padding: 20,
        marginTop: 15,
      },
      bottomTab: {
        height: height / 11,

        marginHorizontal: 30,
      },
    },
    //---------------------------------------------------------android---------------------------------------------------------
    android: {
      dot: {
        position: "relative",
        height: 10,
        borderRadius: 8,
        backgroundColor: "#493d8a",
        marginHorizontal: 8,
      },
      bottomTabIcon: {
        width: width * 0.08,
        height: width * 0.07,
        resizeMode: "contain",
        // padding: 20,
        marginTop: 20,
      },
      bottomTab: {
        height: height / 11,

        marginHorizontal: 30,
      },
    },
    //----------------------------------------------------------default--------------------------------------------------------------
    default: {
      dot: {
        position: "relative",
        height: 10,
        borderRadius: 8,
        backgroundColor: "#493d8a",
        marginHorizontal: 8,
      },
      bottomTabIcon: {
        width: width * 0.08,
        height: width * 0.08,
        resizeMode: "contain",
        // padding: 20,
        marginTop: 15,
      },
      bottomTab: {
        height: height / 11,

        marginHorizontal: 30,
      },
    },
  }),
});
