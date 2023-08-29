import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
interface SplashScreenProps {
  navigation: NavigationProp<any>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
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
