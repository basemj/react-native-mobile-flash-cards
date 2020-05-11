import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import DeckStackNav from "./src/nav/DeckStackNav";

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <DeckStackNav />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
