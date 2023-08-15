import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FloatingLabelInput from "../Components/FloatingLabelInput";
import Button from "../Components/Button";
import { NavigationProp } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type Props = {
  navigation: NavigationProp<any>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../Assets/HealthConnect-St.png")}
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
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "#999999" }}>Don't have an account?.. </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={{ color: "#129FC6" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: { backgroundColor: "white", flex: 1 },
  logoContainer: {},
  logo: {
    width: wp(50),
    height: 60,
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
