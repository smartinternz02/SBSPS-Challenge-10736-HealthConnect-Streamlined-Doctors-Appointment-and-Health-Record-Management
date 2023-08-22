import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
interface SplashScreenProps {
  navigation: NavigationProp<any>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate("Login");
      navigation.navigate("Home", {
        userData: {
          email: "test1@test.com",
          username: "test",
          phone: "9846565250",
          password: "abc@123",
          address: "New Cross Street , NewState building",
          gender: "Male",
          bloodGroup: "O+ve",
          area: "Chennai",
          city: "chennai",
          state: "tamil nadu",
          country: "India",
          pincode: 600041,
        },
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.logoContainer}>
      <Image source={require("../Assets/HealthConnect-Logo.png")} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
});
