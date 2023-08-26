import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderTemplate from "../Components/HeaderTemplate";
import HospitalListCard from "../Components/HospitalListCard";

type HospitalData = {
  id: number;
  name: string;
  address: string;
  contact: string;
  type: "Multispeciality Hospital" | "Private Clinic" | "Government Hospital";
}[];

const NearbyHospitals: React.FC = () => {
  const route = useRoute<any>();
  const filteredHospitals = route.params;
  const [filteredData, setFilteredData] = useState<HospitalData>(
    filteredHospitals["filteredHospitals"]
  );

  return (
    <HeaderTemplate>
      <View style={styles.container}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <View style={{ padding: 10, gap: 20 }}>
          {filteredData &&
            filteredData.map((hospital, index) => (
              <HospitalListCard
                address={hospital.address}
                contact={hospital.contact}
                hospitalName={hospital.name}
                keyIndex={hospital.id}
                key={index}
              />
            ))}
        </View>
      </View>
    </HeaderTemplate>
  );
};

export default NearbyHospitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  hospitalCard: {
    backgroundColor: "#E7F7FA",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
