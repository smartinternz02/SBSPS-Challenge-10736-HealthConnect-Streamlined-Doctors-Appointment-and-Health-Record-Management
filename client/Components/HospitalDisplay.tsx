import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  hospitalName: string;
}

const HospitalDisplay: React.FC<Props> = ({ hospitalName }) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image source={require("../Assets/GH.png")} />
      </View>
      <View style={{}}>
        <Text style={styles.titleText}>{hospitalName}</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>General Consultations</Text>
          <View>
            <Text style={styles.contactTitle}>Consultation Fees:</Text>
            <Text
              style={{
                color: "#CB003F",
              }}
            >
              ₹500
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HospitalDisplay;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#E7F7FA",
    borderRadius: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
  contactContainer: {
    flexDirection: "row",
    width: 200,
    flexWrap: "wrap",
    padding: 15,
    backgroundColor: "#D2F0F6",
    borderRadius: 20,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1686B8",
    textAlign: "justify",
  },
});
