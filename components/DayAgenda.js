import react, { useState, useEffect } from "react";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";

//get screen dimensions
const { height, width } = Dimensions.get("screen");

const DayAgenda = ({ date, appointments, fullDate,  setAddAppointmentMode }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  //change date if selected date is today

  useEffect(() => {
    console.log(appointments)
    if (date.dateString?.length > 0) {
      setCurrentDate(new Date(date.dateString));
      
    }
  }, [date]);

  //config for intl date formatting

  const options = { weekday: "long" };
  const pressHandlerPlus = () => {
    console.log("pressed plus");
  };
  //if there are no appointments, display a message

  let currentAppointments = "no appointments";

  //if the date is today render the current day's appointments

  if (new Date(fullDate) === currentDate) {
    const date = new Date(fullDate);
    const formattedDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

    //map over appointments and render them

    currentAppointments = appointments[formattedDate].map((item, index) => {
      return (
        <Pressable
          key={index}
          onPress={() => {
            console.log("date");
          }}
        >
          <View style={styles.appointmentContainer}>
            <Text style={styles.appointmentTimeText}>
              {item.time} {item.title}
            </Text>
          </View>
        </Pressable>
      );
    });
  }

  //if there is an appointment for today map over the day's appointments and render them

  if (appointments[date.dateString]) {
    currentAppointments = appointments[date.dateString].map((item, index) => {
      console.log(item.coach, " coach");

      //if the appointment is a coaching session re\  er it differently

      if (item.coach !== null) {
        return (
          <Pressable
            style={{
              marginBottom:
                appointments[date.dateString].length - 1 === index
                  ? height * 0.1
                  : 0,
            }}
            key={index}
            onPress={() => {
              console.log("date");
            }}
          >
            <View style={styles.appointmentContainerCoach}>
              <Text style={styles.appointmentTimeTextCoach}>
                {item.startTime} {item.title}
              </Text>
              <Text style={styles.appointmentTimeTextCoachSmall}>
                {item.coach.name} - Financial Literacy
              </Text>
            </View>
          </Pressable>
        );
      } else {
        //if the appointment lasts the entire time of the day, render it differently
        if (item.allDay === true) {
          return (
            <Pressable
              style={{
                marginBottom:
                  appointments[date.dateString].length - 1 === index
                    ? height * 0.1
                    : 0,
              }}
              key={index}
              onPress={() => {
                console.log("date");
              }}
            >
              <View style={styles.appointmentContainer}>
                <Text style={styles.appointmentTimeText}>
                  All day: {item.title}
                </Text>
              </View>
            </Pressable>
          );
        }
        //if the appointment is a regular appointment render it normally
        return (
          <Pressable
            style={{
              marginBottom:
                appointments[date.dateString].length - 1 === index
                  ? height * 0.1
                  : 0,
            }}
            key={index}
            onPress={() => {
              console.log("date");
            }}
          >
            <View style={styles.appointmentContainer}>
              <Text style={styles.appointmentTimeText}>
                {item.startTime} {item.title}
              </Text>
            </View>
          </Pressable>
        );
      }
    });
  }

  // render the day agenda view
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={{
          position: "absolute",
          fontSize: 35,
          zIndex: 221,
          color: "#107070",
          marginLeft: width * 0.1,
          top: height * 0.1,
        }}
        onPress={ () => setAddAppointmentMode(true)}
      >
        <Text style={{ fontSize: 35, zIndex: 22, color: "#107070" }}>+</Text>
      </TouchableOpacity>
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
          {currentAppointments !== "no appointments" ? (
            currentAppointments
            
          ) : (
            <View
              style={{
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                width: width * 0.7,
                borderRadius: 10,
                height: height * 0.05,
                top: height * 0.03,
                backgroundColor: "#DB6464",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                No Appointments
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

//styles
const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      appointmentTimeText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
      },
      appointmentTimeTextCoach: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
      },
      appointmentTimeTextCoachSmall: {
        color: "white",
        fontSize: 15,
      },
      appointmentContainer: {
        top: height * 0.02,
        width: width * 0.7,
        height: height * 0.05,
        backgroundColor: "#959FFF",
        borderRadius: 10,
        justifyContent: "center",
        // alignItems: "left",
        paddingLeft: width * 0.05,
        margin: 10,
      },
      appointmentContainerCoach: {
        top: height * 0.02,
        width: width * 0.7,
        height: height * 0.1,
        backgroundColor: "#DB6464",
        borderRadius: 10,
        justifyContent: "center",
        // alignItems: "left",
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
        height: height * 0.5,
        //op ios moet dit "auto" zijn
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
      },
      text: {
        color: "rgba(16, 112, 112, 1)",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        verticalAlign: "center",
      },
    },
    //-----------------------------------------------------android-----------------------------------------------------
    android: {
      appointmentTimeText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
      },
      appointmentTimeTextCoach: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
      },
      appointmentTimeTextCoachSmall: {
        color: "white",
        fontSize: 15,
      },
      appointmentContainer: {
        top: height * 0.02,
        width: width * 0.7,
        height: height * 0.05,
        backgroundColor: "#959FFF",
        borderRadius: 10,
        justifyContent: "center",
        // alignItems: "left",
        paddingLeft: width * 0.05,
        margin: 10,
      },
      appointmentContainerCoach: {
        top: height * 0.02,
        width: width * 0.7,
        height: height * 0.1,
        backgroundColor: "#DB6464",
        borderRadius: 10,
        justifyContent: "center",
        // alignItems: "left",
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
        height: height * 0.5,
        //op ios moet dit "auto" zijn
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
      },
      text: {
        color: "rgba(16, 112, 112, 1)",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        verticalAlign: "center",
      },
    },
    //-----------------------------------------------default-----------------------------------------------
    default: {
      appointmentTimeText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
      },
      appointmentTimeTextCoach: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
      },
      appointmentTimeTextCoachSmall: {
        color: "white",
        fontSize: 15,
      },
      appointmentContainer: {
        top: height * 0.02,
        width: width * 0.7,
        height: height * 0.05,
        backgroundColor: "#959FFF",
        borderRadius: 10,
        justifyContent: "center",
        // alignItems: "left",
        paddingLeft: width * 0.05,
        margin: 10,
      },
      appointmentContainerCoach: {
        top: height * 0.02,
        width: width * 0.7,
        height: height * 0.1,
        backgroundColor: "#DB6464",
        borderRadius: 10,
        justifyContent: "center",
        // alignItems: "left",
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
        height: height * 0.5,
        //op ios moet dit "auto" zijn
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
      },
      text: {
        color: "rgba(16, 112, 112, 1)",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        verticalAlign: "center",
      },
    },
  }),
});
export default DayAgenda;
