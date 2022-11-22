import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import placeholderProfile from "../assets/images/placeholderProfile.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const CoachCard = ({ setCoachListState, setCoach, item, setLastCoach}) => {
  const presshandler = () => {
    setCoachListState(false);
    console.log(item);
    setLastCoach({details: item})
    setCoach({ details: item });
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardPicture}>
        <Image style={styles.image} source={placeholderProfile} />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.email}>{item.organization}</Text>
        <Text style={styles.website}>{item.website}</Text>
        <TouchableOpacity
          style={styles.booking}
          onPress={() => {
            presshandler();
          }}
        >
          <Text style={styles.button}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoachCard;
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  booking: {
    backgroundColor: "#61CBB4",
    width: width * 0.4,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: height * 0.01,
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  email: {
    fontWeight: "400",
    fontSize: 14,
  },
  website: {
    fontWeight: "400",
    fontSize: 14,
  },
  type: {
    fontWeight: "400",
    fontSize: 16,
  },

  image: {
    flex: 1,
    width: width * 0.4,
    borderRadius: width * 0.05,
    objectFit: "cover",
    aspectRatio: 0.8,
    borderTopLeftRadius: width * 0.05,
    borderBottomLeftRadius: width * 0.05,
  },
  cardPicture: {
    flex: 1,
    overflow: "hidden",
  },
  cardText: {
    flex: 1,
    flexDirection: "column",
    width: width * 0.5,

    height: height * 0.17,
    right: width * 0.05,
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    width: width * 0.9,
    alignSelf: "center",
    height: height * 0.22,
    borderRadius: width * 0.05,
    marginVertical: width * 0.04,
    backgroundColor: "#f2f2f2f2",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
