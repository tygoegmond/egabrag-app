// import { StyleSheet, Text, View, Dimensions, LogBox } from "react-native";
// import { Checkbox } from "react-native-paper";
// import InsetShadow from "react-native-inset-shadow";
// import React from "react";

// const CheckBoxField = ({ text, checked, top, setChecked }) => {
//   return (
//     <View style={[styles.container, { top: height * top }]}>
//       <InsetShadow
//         shadowColor="#000"
//         shadowOpacity={0.8}
//         shadowRadius={5}
//         shadowOffset={0}
//         containerStyle={styles.boxContainer}
//       >
//         <View style={styles.boxContainer}>
//           <Checkbox
//             color="#fff"
//             style={styles.checkbox}
//             status={checked ? "checked" : "unchecked"}
//             onPress={() => {
//               setChecked(!checked);
//             }}
//           />
//         </View>
//       </InsetShadow>
//       <Text style={styles.text}>{text}</Text>
//     </View>
//   );
// };

// export default CheckBoxField;
// const { width, height } = Dimensions.get("screen");

// const styles = StyleSheet.create({
//   container: {
//     width: width * 0.83,
//     height: height * 0.1,
//     // backgroundColor: "#fff",
//     position: "absolute",
//     justifyContent: "left",
//     display: "flex",
//     flexDirection: "row",
//   },
//   checkbox: {
//     width: width * 0.83,
//     height: height * 0.1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "absolute",
//   },
//   boxContainer: {
//     backgroundColor: "#61CBB4",
//     width: height * 0.045,
//     height: height * 0.045,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     position: "absolute",
//   },
//   text: {
//     color: "#fff",
//     // add shadow to text
//     textShadowColor: "rgba(0, 0, 0, 0.75)",
//     // textShadowOffset: { width: -1, height: 1 },
//     textShadowRadius: 10,
//     fontWeight: "bold",
//     padding: height * 0.01,
//     flex: 1,
//     textAlign: "left",
//     marginLeft: width * 0.1,
//     flexWrap: "wrap",
//     width: width * 0.7,
//     fontSize: 18,
//     position: "absolute",
//   },
// });
