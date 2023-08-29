import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const AppointmentCard = ({ appointment }: any) => {
  const {
    appointment: app,
    hospital,
    paymentPrice,
    selectedMethod,
    status,
  } = appointment.appointment;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../Assets/GH.png")} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{hospital.hospitalName}</Text>
        <Text style={styles.address}>{hospital.address}</Text>
        <Text style={styles.contact}>{hospital.contact}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.reminderButton}>
          <Text style={styles.reminderButtonText}>Set Reminder</Text>
        </TouchableOpacity>
        <Text style={styles.token}>Token: {status}</Text>
        <Text style={styles.fee}>Fee: {paymentPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderColor: "#59D4E9",
    borderWidth: 1,
  },
  imageContainer: {
    marginRight: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1686B8",
  },
  address: {
    fontSize: 14,
    color: "#1686B8",
  },
  contact: {
    fontSize: 14,
    color: "#1686B8",
  },
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  reminderButton: {
    borderColor: "#F21F61",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  reminderButtonText: {
    color: "#F21F61",
  },
  token: {
    color: "#F21F61",
  },
  fee: {
    color: "#F21F61",
  },
});

export default AppointmentCard;
