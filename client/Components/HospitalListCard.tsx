import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface Props {
  hospitalName: string;
  address: string;
  contact: string;
  keyIndex: string | number;
}

const HospitalListCard: React.FC<Props> = ({
  hospitalName,
  address,
  contact,
  keyIndex,
}) => {
  const navigation = useNavigation<any>();
  return (
    <View key={keyIndex} style={styles.cardContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Image source={require("../Assets/GH.png")} />
        </View>
        <View>
          <Text style={styles.titleText}>{hospitalName}</Text>
          <View
            style={{
              padding: 5,
              backgroundColor: "#D2F0F6",
              borderRadius: 20,
            }}
          >
            <View style={styles.contactContainer}>
              <Text style={styles.contactTitle}>Address:</Text>
              <View>
                <Text style={styles.contactDetailText}>{address}</Text>
              </View>
            </View>
            <View style={styles.contactContainer}>
              <Text style={styles.contactTitle}>Contact:</Text>
              <View>
                <Text style={styles.contactDetailText}>{contact}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("BookingAppointment", {
              hospitals: {
                hospitalName,
                address,
                contact,
              },
            });
          }}
        >
          <Text style={{ color: "#F21F61", fontSize: 16 }}>Book Now -&gt;</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HospitalListCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 210,
    borderRadius: 20,
    backgroundColor: "#E7F7FA",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
  contactContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 150,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1686B8",
    textAlign: "justify",
  },
  contactDetailText: {
    color: "black",
    paddingHorizontal: 5,
  },
  btnContainer: {
    position: "absolute",
    bottom: -10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#F21F61",
  },
});
