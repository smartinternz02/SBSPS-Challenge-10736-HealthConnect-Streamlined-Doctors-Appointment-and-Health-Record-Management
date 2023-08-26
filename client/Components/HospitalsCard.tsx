import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import hospitalData from "../hospitals.json";

interface Props {
  imageUrl?: any;
  title: string;
  selectedType:
    | "Multispeciality Hospital"
    | "Private Clinic"
    | "Government Hospital";
}

const HospitalsCard: React.FC<Props> = ({ imageUrl, title, selectedType }) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const filteredHospitals = hospitalData.filter(
    (hospital) => hospital.type === selectedType
  );

  console.log(filteredHospitals);
  const handleViewNearby = () => {
    navigation.navigate("NearbyHospitals", {
      filteredHospitals,
    });
  };
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.hospitalsContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            alignSelf: "stretch",
          }}
        >
          {imageUrl && <Image source={imageUrl} />}
          <Text
            style={{
              alignItems: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        </View>
        <Pressable
          style={{
            position: "absolute",
            bottom: 0,
            padding: 10,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#F21F61",
          }}
          onPress={() => handleViewNearby()}
        >
          <Text
            style={{
              color: "#F21F61",
              fontSize: 16,
            }}
          >
            View Nearby
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HospitalsCard;

const styles = StyleSheet.create({
  hospitalsContainer: {
    alignItems: "center",
    height: 150,
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#E7F7FA",
    flex: 1,
    position: "relative",
  },
});
