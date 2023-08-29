import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ExitIcon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

interface Props {
  children: React.ReactNode;
}

const HeaderTemplate: React.FC<Props> = ({ children }) => {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp<any>>();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logout());
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <Image
          source={require("../Assets/HealthConnect-St.png")}
          style={styles.logoStyle}
        />

        {isAuthenticated && (
          <TouchableOpacity onPress={handleSignOut}>
            <ExitIcon
              name="exit-outline"
              style={{ fontSize: 25, padding: 10 }}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Main content */}
      <View style={styles.content}>{children}</View>

      {/* Floating Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.footerIcon,
            route.name === "Home" && styles.highlightedIcon,
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={24} color="#ffffff" />
          {route.name === "Home" && <Text style={styles.iconText}>Home</Text>}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerIcon,
            route.name === "Visits" && styles.highlightedIcon,
          ]}
          onPress={() => navigation.navigate("Visits")}
        >
          <Icon name="bar-chart" size={24} color="#ffffff" />
          {route.name === "Visits" && (
            <Text style={styles.iconText}>Visits</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerIcon,
            route.name === "Profile" && styles.highlightedIcon,
          ]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name="user" size={24} color="#ffffff" />
          {route.name === "Profile" && (
            <Text style={styles.iconText}>Profile</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  logoStyle: {
    width: wp(50),
    height: 60,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    paddingTop: 5, // Add padding at the top
    paddingBottom: 60,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0C6776",
    borderRadius: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  footerIcon: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  highlightedIcon: {
    backgroundColor: "#1686B8",
    borderRadius: 10,
  },
  iconText: {
    color: "#ffffff",
    fontSize: 12,
  },
});

export default HeaderTemplate;
