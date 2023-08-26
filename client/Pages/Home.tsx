import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import HeaderTemplate from "../Components/HeaderTemplate";
import CardBooking from "../Components/CardBooking";

interface HomeProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
}
const Home = ({ navigation, route }: HomeProps) => {
  const { userData }: any = route.params;
  const customerImg = require("../Assets/24X7.png");
  const doctorPng = require("../Assets/doctor-bg.png");
  const onNavigationButton = () => {
    navigation.navigate("HospitalSelection");
  };
  return (
    <HeaderTemplate>
      <Text>Welcome {userData.username},</Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../Assets/Book_Now.png")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardBooking
          message="Book Your  Appointment"
          photoUrl={customerImg}
          // onPress={onNavigationButton}
          navigation={navigation}
        />
        <CardBooking
          message="Emergency Appointment"
          photoUrl={doctorPng}
          navigation={navigation}
        />
      </View>
    </HeaderTemplate>
  );
};

export default Home;

const styles = StyleSheet.create({
  logoStyle: {
    width: wp(50),
    height: 60,
    resizeMode: "contain",
  },
});
