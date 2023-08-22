import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
  stylesBtn?: StyleProp<any>;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, stylesBtn }) => {
  return (
    <View style={[stylesBtn, styles.buttonContainer]}>
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
