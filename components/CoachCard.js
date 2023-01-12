import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState, useEffect } from "react";
import placeholderProfile from "../assets/images/placeholderProfile.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const CoachCard = ({ setCoachListState, setCoach, item, setLastCoach }) => {
  const [cardHeight, setCardHeight] = useState(0.2);
  const [details, setDetails] = useState(false);
  const [specialtiesShow, setSpecialtiesShow] = useState(item.specialties)
  useEffect(() => {
    let temp = specialtiesShow
    // shorten array to 2 items
    if (temp.length > 2) {
      temp = temp.slice(0, 2);
      temp.push("...");
    }
    
    console.log(temp, 'temp')
    temp = temp.join(', ')
    setSpecialtiesShow(temp)

  }, []);
  const toggle = () => {
    console.log(item.name);
    setCardHeight(cardHeight === 0.2 ? 0.4 : 0.2);
    setDetails(!details);
  };

  const presshandler = () => {
    setCoachListState(false);
    console.log(item);
    setLastCoach({ details: item });
    setCoach({ details: item });
    
  };
  return (
    <View style={[styles.container, {}]}>
      <View style={styles.top}>
        <View style={styles.cardPicture}>
          <Image style={styles.image} source={item.src} />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.name}>{item.name}</Text>
          {/* <Text style={styles.type}>{item.type}</Text> */}
          <Text style={styles.email}>{item.organization}</Text>
         
          <Text style={styles.type}>{specialtiesShow}</Text>
          <TouchableOpacity
            style={styles.details}
            onPress={() => {
              toggle();
            }}
          >
            <Text style={styles.button}>
              {details ? "Hide details" : "Show details"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {details ? (
        <View
          style={{
            // top: height * 0.02,
            minWidth: width,
            // backgroundColor: "red",
            padding: width * 0.05,
            // paddingTop: 0,
          }}
        >
          <Text style={styles.detailsTitle}>Details</Text>
          <Text style={styles.Title}>Website: </Text>
          <Text style={styles.website}>{item.website}</Text>
          <Text style={styles.Title}>About:</Text>
          <Text style={styles.about}>
            Relatiecoaching - Coaching Relatiecoaching voor mensen die de
            verbinding met zichzelf willen versterken of herstellen. Mensen die
            het even niet meer weten hebben er baat bij om op zoek te gaan naar
            innerlijke balans. www.1metjezelf-coaching.com
          </Text>
          <Text style={styles.Title}>Specialties:</Text>
          {item.specialties.map((item, index) =>{
            return(
              <Text key={index} style={styles.type}>- {item}</Text>
            )
          })}
          <Text style={styles.Title}>Availability: </Text>
          {item.availability.map((item, index) => {

            return (<Text key={index} style={styles.availability}>{item.day}: {item.time}</Text>)
          }) }
      
          <TouchableOpacity
            style={styles.booking}
            onPress={() => {
              presshandler();
            }}
          >
            <Text style={styles.button}>Book now</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default CoachCard;
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  about: {
    width: width * 0.8,
  },
  top: {
    width: width,
    flex: 1,
    flexDirection: "row",
    // minHeight: height * 0.1,
    height: height * 0.2,
    // backgroundColor: 'green'
  },
  details: {
    backgroundColor: "#61CBB4",
    width: width * 0.4,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: height * 0.01,
  },
  booking: {
    backgroundColor: "#61CBB4",
    width: width * 0.9,
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
    fontSize: 18,
  },
  Title: {
    fontWeight: "600",
    fontSize: 18,
    paddingTop: height * 0.01,
  },
  detailsTitle: {
    fontWeight: "800",
    fontSize: 20,
  },
  type: {
    fontWeight: "400",
    fontSize: 16,
  },

  image: {
    flex: 1,
    width: width * 0.4,
    minWidth: width * 0.4,
    borderRadius: width * 0.05,
    maxHeight: height * 0.2,
    alignSelf: "flex-start",
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
    width: width * 0.7,

    height: height * 0.17,
    right: width * 0.05,
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,

    width: width,
    maxWidth: width,
    alignSelf: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    // height: height * 0.22,
    borderRadius: width * 0.05,
    marginVertical: width * 0.04,
    backgroundColor: "#f2f2f2f2",
    // alignItems: "flex-start",
    // justifyContent: "space-between",
    flexDirection: "column",
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
