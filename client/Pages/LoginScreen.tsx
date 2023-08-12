import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import FloatingLabelInput from "../Components/FloatingLabelInput";
import Button from "../Components/Button";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../Assets/HealthConnect-Logo.png")}
          alt="logo"
          style={styles.logo}
        />
      </View>
      <View style={styles.vectorContainer}>
        <Image
          source={require("../Assets/Doctor-Vector.jpg")}
          alt="doctor-vector"
          style={styles.vectorImg}
        />
        <Text style={styles.textStyle}>Upgrade for Health checkup</Text>
      </View>
      <View style={{ padding: 20 }}>
        <FloatingLabelInput
          label="Your Email"
          onChangeText={setEmail}
          value={email}
        />
        <FloatingLabelInput
          label="Your Password"
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoContainer: {},
  logo: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  vectorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  vectorImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  textStyle: {
    color: "#106293",
    fontSize: 20,
  },
  buttonContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
