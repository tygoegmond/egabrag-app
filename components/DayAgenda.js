import react, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { height, width } = Dimensions.get("screen");
const DayAgenda = ({ date }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(date);
  useEffect(() => {
    if (date.dateString?.length > 0) {
      setCurrentDate(new Date(date.dateString));
    }
  }, [date]);
  const options = { weekday: "long" };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.agendaContainer}>
       
        <View style={styles.leftSide}>
          <View style={styles.dayItem}>
            <Text style={styles.text}>
              {new Intl.DateTimeFormat("en-US", options)
                .format(currentDate)
                .slice(0, 3)}
            </Text>
            <View style={styles.dayNumber}>
              <Text style={styles.dayNumberText}>{currentDate.getDate()}</Text>
            </View>
          </View>
        </View>

        <View style={styles.appointments}>
          <View style={styles.appointmentTime}>
            <Text style={styles.appointmentTimeText}>10:00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    appointmentTimeText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
    },
    appointmentTime: {
        top: height * 0.02,
        width: width * 0.7,
        height: height * 0.05,
        backgroundColor: "#DB6464",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "left",
        paddingLeft: width * 0.05,
        margin: 10,
        },
    
  appointments: {
    flex: 1,
    
    height: "100%",

    alignItems: "center",

    right: 0,
  },
  agendaContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    height: height,
  },
  dayNumberText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  dayNumber: {
    backgroundColor: "rgba(16, 112, 112, 1)",
    width: width / 12,
    height: width / 12,
    borderRadius: width / 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  leftSide: {
  
    width: width * 0.2,
  },
  dayItem: {
    width: width * 0.15,
    left: width * 0.05,
    top: height * 0.02,
    // backgroundColor: "rgba(16, 112, 112, 0.1)",
  },
  text: {
    color: "rgba(16, 112, 112, 1)",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    verticalAlign: "center",
  },
});
export default DayAgenda;
