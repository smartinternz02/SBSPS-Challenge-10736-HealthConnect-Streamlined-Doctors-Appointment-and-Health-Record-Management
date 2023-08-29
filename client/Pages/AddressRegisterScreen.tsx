import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import FloatingLabelInput from "../Components/FloatingLabelInput";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import Button from "../Components/Button";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import countryListData from "../contries.json";
import { Country, State, City } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { login, register } from "../redux/authSlice";

interface AddressProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
}

const AddressRegisterScreen = ({ navigation, route }: AddressProps) => {
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const { formData }: any = route.params;

  const [isFocus, setIsFocus] = useState(false);
  const [dataFromRegister, setDataFromRegister] = useState(formData);

  const countryList: { countryname: string; countryIso: string }[] = [];
  const stateList: { statename: string; stateIso: string; cCode: string }[] =
    [];
  const cityList: { cityName: string }[] = [];
  const [countries, setCountries] = useState<
    {
      countryname: string;
      countryIso: string;
    }[]
  >([]);
  const [states, setStates] = useState<
    {
      statename: string;
      stateIso: string;
      cCode: string;
    }[]
  >([]);
  const [cities, setCities] = useState<
    {
      cityName: string;
    }[]
  >([]);

  const dispatch = useDispatch();

  const handleCreateUser = async () => {
    if (
      address === "" ||
      area === "" ||
      selectedCity === "" ||
      selectedCountry == "" ||
      pincode === ""
    ) {
      throw new Error("Please specify the fields");
    }

    const newDatas = {
      email: formData.email,
      username: formData.username,
      phone: formData.phone,
      password: formData.password,
      bloodGroup: formData.bloodGroup,
      gender: formData.gender,
      area: area,
      pincode: parseInt(pincode),
      city: selectedCity,
      state: selectedState,
      country: selectedCountry,
    };
    setDataFromRegister(newDatas);
    // navigation.navigate("Home", {
    //   user: dataFromRegister,
    // });
    dispatch(register(dataFromRegister));
    navigation.navigate("Login");
    // try {
    //   console.log("trying");
    //   await axios
    //     .post("https://healthconnect.com/api/users/signup", dataFromRegister)
    //     .then((response) => console.log("response", response))
    //     .catch((error) => console.log("error", error));
    // } catch (err) {
    //   console.log("err", err);
    // }
  };

  useEffect(() => {
    countryListData.map((country: any) => {
      countryList.push({
        countryname: country["countryName"],
        countryIso: country["countryShortCode"],
      });
    });
    setCountries(countryList);
  }, []);

  const handleCountryState = (countryCode: any) => {
    State.getStatesOfCountry(countryCode).map((state) => {
      stateList.push({
        statename: state.name,
        stateIso: state.isoCode,
        cCode: countryCode,
      });
    });
    setStates(stateList);
  };

  const handleStateCity = (stateCode: string, countryCode: string) => {
    City.getCitiesOfState(countryCode, stateCode).map((city) => {
      cityList.push({ cityName: city.name });
    });
    setCities(cityList);
  };
  return (
    <View style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      <View>
        <Image
          source={require("../Assets/HealthConnect-St.png")}
          style={styles.logoStyle}
        />
      </View>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Register")}
      >
        <Icon name="arrow-left" size={30} />
      </Pressable>
      <Text
        style={{
          color: "black",
          fontSize: 16,
          // fontFamily: "Helvetica",
        }}
      >
        Please Enter More Details
      </Text>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FloatingLabelInput
            label="Address"
            onChangeText={setAddress}
            value={address}
          />
          <FloatingLabelInput
            label="Area"
            onChangeText={setArea}
            value={area}
          />
          <View style={styles.regionContainer}>
            <Text
              style={{
                fontSize: 16,
                color: "#015867",
                marginBottom: 5,
                fontFamily: "Helvetica",
              }}
            >
              Select a Region
            </Text>

            <Dropdown
              data={countries}
              search
              maxHeight={300}
              labelField="countryname"
              valueField="countryname"
              placeholder={!isFocus ? "Select a Country" : "..."}
              searchPlaceholder="Search..."
              value={selectedCountry}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setSelectedCountry(item.countryname);
                handleCountryState(item.countryIso);
                setIsFocus(false);
              }}
              keyboardAvoiding={true}
              style={styles.regionSelector}
            />
          </View>
          <View style={styles.regionContainer}>
            <Text
              style={{
                fontSize: 16,
                color: "#015867",
                marginBottom: 5,
                fontFamily: "Helvetica",
              }}
            >
              Select your State
            </Text>
            <Dropdown
              data={states}
              search
              maxHeight={300}
              labelField="statename"
              valueField="statename"
              placeholder={!isFocus ? "Select a State" : "..."}
              searchPlaceholder="Search..."
              value={selectedCountry}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setSelectedState(item.statename);
                handleStateCity(item.stateIso, item.cCode);
                setIsFocus(false);
              }}
              keyboardAvoiding={true}
              style={styles.regionSelector}
            />
            <View style={styles.regionContainer}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#015867",
                  marginBottom: 5,
                  fontFamily: "Helvetica",
                }}
              >
                Select a City
              </Text>
              <Dropdown
                data={cities}
                search
                maxHeight={300}
                labelField="cityName"
                valueField="cityName"
                placeholder={!isFocus ? "Select a City" : "..."}
                searchPlaceholder="Search..."
                value={selectedCountry}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setSelectedCity(item.cityName);
                  setIsFocus(false);
                }}
                keyboardAvoiding={true}
                style={styles.regionSelector}
              />
            </View>
          </View>

          <FloatingLabelInput
            label="Pincode"
            onChangeText={setPincode}
            value={pincode}
          />
        </View>
      </ScrollView>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 0.2,
        }}
      >
        <Button
          title="Create Account"
          stylesBtn={styles.btnStyle}
          onPress={handleCreateUser}
        />
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
  dropdownButton: {
    width: "100%",
    backgroundColor: "#E0E0E0",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "black",
    textAlign: "left",
  },
  regionSelector: {
    padding: 10,
    height: 40,
    borderColor: "#11B3CF",
    borderWidth: 1,
    borderRadius: 5,
  },
  regionContainer: {
    paddingVertical: 10,
  },
  btnStyle: {
    height: 50,
    borderRadius: 20,
  },
});
