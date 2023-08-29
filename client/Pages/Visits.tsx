import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderTemplate from "../Components/HeaderTemplate";
import AppointmentCard from "../Components/AppointmentCard";
import { useSelector } from "react-redux";

const Visits = () => {
  const appointment = useSelector((state: any) => state.appointment);
  return (
    <HeaderTemplate>
      {appointment.isAppointmentScheduled ? (
        <View style={{ padding: 10 }}>
          <AppointmentCard appointment={appointment} />
        </View>
      ) : (
        <View>
          <Text>No Appointment found</Text>
        </View>
      )}
    </HeaderTemplate>
  );
};

export default Visits;

const styles = StyleSheet.create({});
