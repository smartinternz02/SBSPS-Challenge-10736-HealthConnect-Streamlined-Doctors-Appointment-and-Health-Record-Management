import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRoute } from "@react-navigation/native";

interface Props {
  children: React.ReactNode;
}

const HeaderTemplate: React.FC<Props> = ({ children }) => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Image
        source={require("../Assets/HealthConnect-St.png")}
        style={styles.logoStyle}
      />

      {/* Main content */}
      <View style={styles.content}>{children}</View>

      {/* Floating Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.footerIcon,
            route.name === "Home" && styles.highlightedIcon,
          ]}
        >
          <Icon name="home" size={24} color="#ffffff" />
          {route.name === "Home" && <Text style={styles.iconText}>Home</Text>}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerIcon,
            route.name === "Analytics" && styles.highlightedIcon,
          ]}
        >
          <Icon name="bar-chart" size={24} color="#ffffff" />
          {route.name === "Analytics" && (
            <Text style={styles.iconText}>Analytics</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerIcon,
            route.name === "User" && styles.highlightedIcon,
          ]}
        >
          <Icon name="user" size={24} color="#ffffff" />
          {route.name === "User" && <Text style={styles.iconText}>User</Text>}
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
    padding: 5,
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
