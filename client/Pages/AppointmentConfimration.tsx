import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import moment from "moment";

const AppointmentConfimration = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [appointmentDetails, setAppointmentDetails] = useState(
    route.params.appointmentDetails
  );
  const [hospitalData, setHospitalData] = useState(route.params.hospitalData);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={30} />
        <Text
          style={{
            color: "black",
            fontSize: 16,
            // fontFamily: "Helvetica",
          }}
        >
          Book your Appointment
        </Text>
      </Pressable>
      <View
        style={{
          padding: 10,
          position: "relative",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#E7F7FA",
            height: 250,
            borderRadius: 20,
            padding: 5,
            position: "relative",
          }}
        >
          <View
            style={{
              height: 40,
              backgroundColor: "white",
              borderRadius: 20,
              flexDirection: "row",
              width: "80%",
              position: "absolute",
              top: 5,
              alignSelf: "center",
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                borderRightColor: "#EEEEEE",
                borderRightWidth: 2,
                padding: 5,
              }}
            >
              <Icon
                name="clock"
                style={{
                  fontSize: 20,
                  marginRight: 5,
                  color: "#F21F61",
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: "#F21F61",
                }}
              >
                {appointmentDetails.time}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                padding: 5,
              }}
            >
              <Icon
                name="calendar"
                style={{
                  fontSize: 20,
                  marginRight: 5,
                  color: "#F21F61",
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: "#F21F61",
                }}
              >
                {appointmentDetails.date}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 50,
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Image source={require("../Assets/GH.png")} />
            <View>
              <Text
                style={{
                  color: "black",
                  fontSize: 24,
                }}
              >
                {hospitalData.hospitalName}
              </Text>
              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                  //   backgroundColor: "#11B3CF",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#1686B8",
                  }}
                >
                  General Consultation
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, padding: 10, zIndex: 100 }}>
            <View
              style={{ backgroundColor: "white", flex: 1, borderRadius: 20 }}
            >
              <View style={styles.container}>
                <View style={styles.row}>
                  <Text style={styles.label}>Consultation fee</Text>
                  <Text style={styles.amount}>₹ 200.00</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Taxes & Charges</Text>
                  <Text style={styles.amount}>₹ 00.00</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.row}>
                  <Text style={[styles.label, styles.totalLabel]}>
                    Total Charges
                  </Text>
                  <Text style={[styles.amount, styles.totalAmount]}>
                    ₹ 200.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <Image
              source={require("../Assets/GH.png")}
              style={{ zIndex: -100 }}
            />
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}
              >
                {hospitalData.hospitalName}
              </Text>
              <Text
                style={{
                  textDecorationLine: "underline",
                }}
              >
                {hospitalData.address}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#1686B8",
              marginBottom: 10,
            }}
          >
            Payment Method
          </Text>
          <View style={styles.instructionsContainer}>
            <TouchableOpacity
              style={styles.instructionsTitleContainer}
              onPress={() => setShowInstructions(!showInstructions)}
            >
              <Text style={styles.instructionsTitle}>Instructions</Text>
              <Icon
                name={showInstructions ? "chevron-up" : "chevron-down"}
                size={20}
              />
            </TouchableOpacity>
            {showInstructions && ( //
              <View style={styles.extendedInstructions}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="clock"
                    style={{ fontSize: 16, color: "#F21F61", marginRight: 10 }}
                  />
                  <Text style={styles.instruction}>
                    Please reach 15 minutes before your scheduled appointment
                    time.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="file-text"
                    style={{ fontSize: 16, color: "#F21F61", marginRight: 10 }}
                  />
                  <Text style={styles.instruction}>
                    Show your appointment confirmation details at the reception
                    desk.
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View style={styles.paymentContainer}>
            <View style={styles.selectionCardContainer}>
              <TouchableOpacity
                style={[
                  styles.selectionCard,
                  selectedMethod === "online" && styles.selectedCard,
                ]}
                onPress={() => handleMethodSelect("online")}
              >
                <Image
                  source={require("../Assets/pay-online.png")}
                  style={styles.cardImage}
                />
                <Text style={styles.cardText}>Pay Online</Text>
                {selectedMethod === "online" && (
                  <Icon name="check-circle" size={20} color="green" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selectionCard,
                  selectedMethod === "atHospital" && styles.selectedCard,
                ]}
                onPress={() => handleMethodSelect("atHospital")}
              >
                <Image
                  source={require("../Assets/pay-hospital.png")}
                  style={styles.cardImage}
                />
                <Text style={styles.cardText}>Pay at Hospital</Text>
                {selectedMethod === "atHospital" && (
                  <Icon name="check-circle" size={20} color="green" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={{
          flex: 0.25,
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <View
          style={{ padding: 20, backgroundColor: "#75C44C", borderRadius: 30 }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Fix Appointment</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default AppointmentConfimration;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 18,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  instructionsContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  instructionsTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  extendedInstructions: {
    marginVertical: 10,
  },
  instruction: {
    fontSize: 14,
    marginBottom: 5,
    color: "black",
  },
  selectionCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectionCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedCard: {
    borderColor: "green",
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
  },
});
