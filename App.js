import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

export default function App() {
  const url = Linking.useURL();

  return (
    <View style={styles.container}>
      <Text>Initial / updated URL: {url}</Text>
      <Text>Deep link URL: {Linking.createURL('example')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
