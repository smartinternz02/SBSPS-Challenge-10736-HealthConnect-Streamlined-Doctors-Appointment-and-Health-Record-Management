import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

interface Props {
  imageUrl?: any;
  title: string;
}

const HospitalsCard: React.FC<Props> = ({ imageUrl, title }) => {
  const navigation = useNavigation(); // Initialize navigation

  const handleViewNearby = () => {
    // Handle navigation to a new page and pass necessary data
    // navigation.navigate("NearbyHospitals", { selectedHospital: title });
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.hospitalsContainer}>
        {/* ... (existing content) */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            padding: 10,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#F21F61",
          }}
        >
          {/* Attach onPress event to trigger navigation */}
          <Pressable onPress={handleViewNearby}>
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
