import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import DeckListScreen from "../screens/DeckListScreen";
import AddNewDeckScreen from "../screens/AddNewDeckScreen";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const DeckTabsScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "DeckListScreen") {
            iconName = "ios-filing";
          } else if (route.name === "AddNewDeckScreen") {
            iconName = "ios-add-circle";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Platform.OS === "ios" ? "#007aff" : "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="DeckListScreen"
        component={DeckListScreen}
        options={{ title: "Decks" }}
      />
      <Tab.Screen
        name="AddNewDeckScreen"
        component={AddNewDeckScreen}
        options={{ title: "New Deck" }}
      />
    </Tab.Navigator>
  );
};

export default DeckTabsScreen;
