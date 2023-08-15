import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import FloatingLabelInput from "../Components/FloatingLabelInput";
import SelectDropdown from "react-native-select-dropdown";
import contriesData from "../contries.json";
import CountryFlatListComponent from "../Components/CountryFlatListComponent";

const AddressRegisterScreen = () => {
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [country, setCountry] = useState(null);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    setCountryList(JSON.parse(JSON.stringify(contriesData)));
  }, []);

  const handleItemSelect = (selectedItem: any) => {
    // Do something with the selected item
    console.log("Selected item:", selectedItem);
  };
  return (
    <View style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      <View>
        <Image
          source={require("../Assets/HealthConnect-St.png")}
          style={styles.logoStyle}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="arrow-left" size={30} />
        <Text
          style={{
            color: "black",
            fontSize: 16,
            // fontFamily: "Helvetica",
          }}
        >
          Please Enter More Details
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FloatingLabelInput
          label="Address"
          onChangeText={setAddress}
          value={address}
        />
        <FloatingLabelInput label="Area" onChangeText={setArea} value={area} />
        <Text
          style={{
            fontSize: 16,
            color: "#015867",
            marginBottom: 5,
            fontFamily: "Helvetica",
          }}
        >
          Select a Country
        </Text>
        {/* <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SelectDropdown
            data={countryList.map((country) => country["countryName"])}
            defaultValue={country}
            onSelect={(selectedItem) => setCountry(selectedItem)}
            buttonTextAfterSelection={(selectedItem) => selectedItem}
            rowTextForSelection={(item, index) => item}
          />
        </View> */}
      </View>
    </View>
  );
};

export default AddressRegisterScreen;

const styles = StyleSheet.create({
  logoStyle: {
    width: wp(50),
    height: 60,
    resizeMode: "contain",
  },
});
