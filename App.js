import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import TopBar2 from './components/TopBar2';
import Body from './components/body';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar2 />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
