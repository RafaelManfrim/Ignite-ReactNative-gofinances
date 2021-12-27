import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rafael Manfrim</Text>
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
  title: {
    fontSize: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderStyle: 'solid' 
  }
});
