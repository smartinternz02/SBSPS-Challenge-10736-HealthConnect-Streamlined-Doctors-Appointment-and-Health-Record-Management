import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import FloatingLabelInput from "../Components/FloatingLabelInput";
import Icon from "react-native-vector-icons/Feather";
import { NavigationProp } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Prop {
  navigation: NavigationProp<any>;
}

const RegisterScreen: React.FC<Prop> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <View style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      <View>
        <Image
          source={require("../Assets/HealthConnect-St.png")}
          style={styles.logoStyle}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            // fontFamily: "Helvetica",
          }}
        >
          Getting Started
        </Text>
        <Text style={styles.textStyle}>Create an account</Text>
        <Text style={styles.textStyle}>continue!</Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
          ></KeyboardAvoidingView>
          <View>
            <FloatingLabelInput
              label="Your Email"
              value={email}
              onChangeText={setEmail}
            />
            <FloatingLabelInput
              label="Your Name"
              value={username}
              onChangeText={setUsername}
            />
            <FloatingLabelInput
              label="Password"
              value={password}
              onChangeText={setPassword}
            />
            <FloatingLabelInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <FloatingLabelInput
              label="BloodGroup"
              value={bloodGroup}
              onChangeText={setBloodGroup}
            />
            <FloatingLabelInput
              label="Gender"
              value={gender}
              onChangeText={setGender}
            />
            <FloatingLabelInput
              label="Phone Number"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
        </ScrollView>
        <View style={{ padding: 10, alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Address");
            }}
          >
            <Icon name="arrow-right" size={35} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Text style={{ fontSize: 16, color: "#999999" }}>
            Already Have an account? ...
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize: 16, color: "#129FC6" }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: "#129FC6",
    fontSize: 18,
  },
  logoStyle: {
    width: wp(50),
    height: 60,
    resizeMode: "contain",
  },
});
