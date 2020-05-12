import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import DeckStackNav from "./src/nav/DeckStackNav";
import reduxStore from "./reduxStore";

const App = () => {
  return (
    <Provider store={reduxStore}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <DeckStackNav />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
