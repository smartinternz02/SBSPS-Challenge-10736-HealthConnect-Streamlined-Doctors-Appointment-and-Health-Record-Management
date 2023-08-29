import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import LoginScreen from "./Pages/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./Pages/SplashScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import AddressRegisterScreen from "./Pages/AddressRegisterScreen";
import Home from "./Pages/Home";
import BookAppointment from "./Pages/HospitalSelect";
import NearbyHospitals from "./Pages/NearbyHospitals";
import BookingAppointment from "./Pages/BookingAppointment";
import AppointmentConfimration from "./Pages/AppointmentConfimration";
import AppointmentRequested from "./Pages/AppointmentRequested";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Visits from "./Pages/Visits";
import ProfileScreen from "./Pages/ProfileScreen";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Address" component={AddressRegisterScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="HospitalSelection"
              component={BookAppointment}
            />
            <Stack.Screen name="NearbyHospitals" component={NearbyHospitals} />
            <Stack.Screen
              name="BookingAppointment"
              component={BookingAppointment}
            />
            <Stack.Screen
              name="AppointmentConfirmation"
              component={AppointmentConfimration}
            />
            <Stack.Screen
              name="AppointmentRequested"
              component={AppointmentRequested}
            />
            <Stack.Screen name="Visits" component={Visits} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
