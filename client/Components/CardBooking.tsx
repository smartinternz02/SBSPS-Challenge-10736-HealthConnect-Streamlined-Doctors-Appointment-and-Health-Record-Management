import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  message: string;
  photoUrl?: any;
}

const CardBooking: React.FC<Props> = ({ message, photoUrl }) => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text style={styles.textStyle}>{message}</Text>
        {photoUrl && (
          <Image
            source={photoUrl}
            style={{ flex: 0.5, objectFit: "contain" }}
          />
        )}
      </View>
      {/* <Button title="Book Now" stylesBtn={styles.btnStyle} onPress={() => {}} /> */}
      <Pressable style={styles.btnStyle}>
        <Button title="Book Now" />
      </Pressable>
    </View>
  );
};

export default CardBooking;

const styles = StyleSheet.create({
  cardContainer: {
    width: 220,
    height: 150,
    borderRadius: 20,
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    position: "relative",
  },
  textStyle: {
    fontSize: 16,
    flex: 0.5,
    width: wp(100),
    fontWeight: "bold",
  },
  btnStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -10,
    justifyContent: "center",
    alignItems: "center",
  },
});
