//import react native assets

import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

//creating global styles to be used accross componenets
const {height, width} = Dimensions.get("screen");
const Global =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  largeField: {
    //dropshadow
    shadowColor: "#000",
    shadowOffset: {
        width: -1,
        height: 1.2,
    },
    width: width / 1.2,
    borderRadius: 10,
    shadowOpacity: 0.15,   
    shadowRadius: 0.8,
    elevation: 5,
    marginBottom: 10,
    paddingLeft: width / 20,
    paddingTop: height / 50,
    fontSize: 20,
    height: height / 13,
    backgroundColor: "rgba(248,244,244,0.9)",
    shadowBlur: 3,

  },
  smallField: {
    //dropshadow
    shadowColor: "#000",
    shadowOffset: {
        width: -1,
        height: 1.2,
    },
    width: width / 2.6,
    
    borderRadius: 10,
    shadowOpacity: 0.15,   
    shadowRadius: 0.8,
    elevation: 5,
    marginBottom: 10,
    paddingLeft: width / 20,
    paddingTop: height / 50,
    fontSize: 20,
    height: height / 13,
    backgroundColor: "rgba(248,244,244,0.9)",
    shadowBlur: 3,

  },
  placeholder: {
     position: "absolute",
     top: height / 77,
     left: width / 20,
     zIndex: 11,
     fontSize: 15,
     color: "#7C7C7C"
  },
  button: {
    backgroundColor: "#61CBB4",
    width: width / 1.2,
    height: height / 14,
    borderRadius: 10,
    padding: 10,
    bottom: getStatusBarHeight(),
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 0,
  },
});

export default Global;