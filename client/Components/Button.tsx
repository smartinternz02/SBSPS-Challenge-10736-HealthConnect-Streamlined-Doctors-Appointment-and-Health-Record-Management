import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    height: 60,
    backgroundColor: "#11B3CF",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
  },
});
