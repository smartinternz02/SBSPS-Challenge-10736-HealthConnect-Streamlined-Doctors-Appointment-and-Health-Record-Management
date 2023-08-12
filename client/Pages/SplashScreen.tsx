import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

function SplashScreen(): JSX.Element {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../Assets/HealthConnect-Logo.png')} />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
