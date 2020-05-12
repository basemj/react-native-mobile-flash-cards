import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabsNav from "./HomeTabsNav";
import DeckScreen from "../screens/DeckScreen";
import AddNewCardScreen from "../screens/AddNewCardScreen";
import QuizScreen from "../screens/QuizScreen";
import QuizResultsScreen from "../screens/QuizResultsScreen";

const DeckStack = createStackNavigator();

const DeckStackScreen = () => {
  return (
    <DeckStack.Navigator>
      <DeckStack.Screen
        name="HomeTabsNav"
        component={HomeTabsNav}
        options={{
          headerShown: false,
          title: "Decks",
        }}
      />
      <DeckStack.Screen
        name="DeckScreen"
        component={DeckScreen}
        options={({ route }) => ({ title: route.params.deck.title })}
      />
      <DeckStack.Screen
        name="AddNewCardScreen"
        component={AddNewCardScreen}
        options={{ title: "Add Card" }}
      />
      <DeckStack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ title: "Quiz" }}
      />
      <DeckStack.Screen
        name="QuizResultsScreen"
        component={QuizResultsScreen}
        options={{ title: "Results" }}
      />
    </DeckStack.Navigator>
  );
};

export default DeckStackScreen;
