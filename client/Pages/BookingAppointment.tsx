import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import HospitalDisplay from "../Components/HospitalDisplay";
import moment from "moment";

const BookingAppointment = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [hospitalDetails, setHospitalDetails] = useState(
    route.params["hospitals"]
  );
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState("");
  const [timeSlots, setTimeSlots] = useState(generateTimeSlots());

  function generateTimeSlots() {
    const startTime = moment("09:00 AM", "hh:mm A");
    const endTime = moment("09:00 PM", "hh:mm A");
    const timeSlots = [];

    while (startTime.isSameOrBefore(endTime)) {
      timeSlots.push({
        time: startTime.format("hh:mm A"),
        disabled: false,
      });
      startTime.add(1, "hour");
    }

    return timeSlots;
  }

  const initialSelectedDate = moment();

  function handleDateSelect(dayOffset: number) {
    const selected = initialSelectedDate.clone().add(dayOffset, "days"); // Use initialSelectedDate as base
    setSelectedDate(selected);
    setSelectedTime("");
    setTimeSlots(generateTimeSlots());
  }

  function handleTimeSelect(time: string) {
    setSelectedTime(time);
    const updatedSlots = timeSlots.map((slot) => ({
      ...slot,
      disabled: slot.time !== time,
    }));
    setTimeSlots(updatedSlots);
  }

  function handleUnselectTime() {
    setSelectedTime(""); // Clear the selected time
    const updatedSlots = timeSlots.map((slot) => ({
      ...slot,
      disabled: false, // Reset all slots to be enabled
    }));
    setTimeSlots(updatedSlots);
  }

  const handleAppointmentBooking = () => {
    if (selectedDate && selectedTime) {
      navigation.navigate("AppointmentConfirmation", {
        hospitalData: JSON.parse(JSON.stringify(hospitalDetails)),
        appointmentDetails: {
          time: selectedTime,
          date: selectedDate.format("DD/MM/YYYY"),
        },
      });
    }
  };
  return (
    // <HeaderTemplate>
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 5,
      }}
    >
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={30} />
        <Text
          style={{
            color: "black",
            fontSize: 16,
            // fontFamily: "Helvetica",
          }}
        >
          Select your slot
        </Text>
      </Pressable>
      <ScrollView>
        <View
          style={{
            padding: 10,
          }}
        >
          <HospitalDisplay hospitalName={hospitalDetails.hospitalName} />
        </View>
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              padding: 5,
              color: "black",
              fontSize: 16,
            }}
          >
            Select Date and Timing
          </Text>
          <View>
            <View style={styles.dateContainer}>
              <TouchableOpacity
                style={[
                  styles.dateBox,
                  selectedDate.isSame(moment(), "day") &&
                    styles.selectedDateBox,
                ]}
                onPress={() => handleDateSelect(0)}
                disabled={selectedDate.isSame(moment(), "day")}
              >
                <Text style={styles.dayText}>
                  {moment().format("ddd").toUpperCase()}
                </Text>
                <Text style={styles.dateText}>{moment().format("DD")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.dateBox,
                  selectedDate.isSame(moment().add(1, "day"), "day") &&
                    styles.selectedDateBox,
                ]}
                onPress={() => handleDateSelect(1)}
                disabled={selectedDate.isSame(moment().add(1, "day"), "day")}
              >
                <Text style={styles.dayText}>
                  {moment().add(1, "day").format("ddd").toUpperCase()}
                </Text>
                <Text style={styles.dateText}>
                  {moment().add(1, "day").format("DD")}
                </Text>
              </TouchableOpacity>
            </View>
            {/* Display Time Slots */}
            <View>
              <ScrollView>
                <View style={styles.timeSlotsContainer}>
                  {timeSlots.map((slot) => (
                    <View
                      key={slot.time}
                      style={[
                        styles.timeSlotBox,
                        slot.disabled && styles.disabledTimeSlotBox,
                      ]}
                    >
                      <TouchableOpacity
                        onPress={
                          () => handleTimeSelect(slot.time) // Select or unselect the time slot
                        }
                        disabled={slot.disabled}
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={styles.timeSlotText}>{slot.time}</Text>
                        {selectedTime === slot.time && ( // Show "X" icon only for selected time
                          <Icon
                            name="x"
                            size={20}
                            color="red"
                            style={{ marginLeft: 10 }}
                            onPress={handleUnselectTime}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
          <Pressable
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "#0C6776",
              padding: 20,
              borderRadius: 30,
            }}
            onPress={handleAppointmentBooking}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
              }}
            >
              Make an Appointment
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookingAppointment;

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  dateBox: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  selectedDateBox: {
    backgroundColor: "#1686B8",
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  timeSlotsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  timeSlotBox: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  disabledTimeSlotBox: {
    backgroundColor: "#E0E0E0",
  },
  timeSlotText: {
    fontSize: 18,
  },
});
