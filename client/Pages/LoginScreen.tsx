import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import FloatingLabelInput from "../Components/FloatingLabelInput";
import Button from "../Components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";

type Props = {
  navigation: NavigationProp<any>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const auth = useSelector((state: any) => state.auth);

  const handleLogin = () => {
    if (email !== auth.user.email) {
      console.log("email");
      return;
    }
    if (password !== auth.user.password) {
      console.log("password");
      return;
    }
    dispatch(login(auth.user));
    navigation.navigate("Home");
  };
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
        <Pressable
          style={{
            width: 250,
            height: 60,
            backgroundColor: "#11B3CF",
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={handleLogin}
        >
          <Text style={{ textAlign: "center", color: "#FFFFFF", fontSize: 20 }}>
            Login
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={{ textAlign: "center", color: "#106293" }}>Or</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Emergency Appointment" onPress={() => {}} />
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
    width: 80,
    height: 80,
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
