import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Open up App.js to start working on your app?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bada55",
    alignItems: "center",
    justifyContent: "center",
  },
});
