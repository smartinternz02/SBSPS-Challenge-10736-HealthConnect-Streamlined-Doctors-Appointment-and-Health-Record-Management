import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import HeaderTemplate from "../Components/HeaderTemplate";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const AppointmentRequested = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute<RouteProp<any>>();
  console.log(route.params);

  return (
    <HeaderTemplate>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require("../Assets/requested-icon.png")} />

        <Text style={{ fontSize: 32, fontWeight: "bold" }}>Request Sent</Text>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1686B8" }}>
            Appointment is being Requested!
          </Text>
        </View>
      </View>
    </HeaderTemplate>
  );
};

export default AppointmentRequested;

const styles = StyleSheet.create({});
