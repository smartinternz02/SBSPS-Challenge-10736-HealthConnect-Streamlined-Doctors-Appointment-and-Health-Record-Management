import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderTemplate from "../Components/HeaderTemplate";
import Icon from "react-native-vector-icons/Feather";
import { NavigationProp } from "@react-navigation/native";
import HospitalsCard from "../Components/HospitalsCard";

interface Props {
  navigation: NavigationProp<any>;
}

const BookAppointment: React.FC<Props> = ({ navigation }) => {
  const GH = require("../Assets/GH.png");
  const MH = require("../Assets/MH.png");
  const PH = require("../Assets/PH.png");

  return (
    <HeaderTemplate>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center" }}
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
          Book Your Appoinment{" "}
        </Text>
      </Pressable>
      <HospitalsCard
        title="Government Hospitals"
        imageUrl={GH}
        selectedType="Government Hospital"
      />
      <HospitalsCard
        title="Private Hospitals"
        imageUrl={PH}
        selectedType="Private Clinic"
      />
      <HospitalsCard
        title="MultiSpecialtiy Hospitals"
        imageUrl={MH}
        selectedType="Multispeciality Hospital"
      />
    </HeaderTemplate>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
