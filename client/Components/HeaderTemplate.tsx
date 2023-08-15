import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderTemplate: React.FC = ({ children }) => {
  return (
    <View>
      <Text>HeaderTemplate</Text>
      <View>{children}</View>
    </View>
  );
};

export default HeaderTemplate;

const styles = StyleSheet.create({});
