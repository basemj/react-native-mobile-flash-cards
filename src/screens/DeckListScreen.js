import React from "react";
import { Text, Button } from "react-native";

import CustomSafeAreaView from "../helpers/CustomSafeAreaView";

import DecksList from "../components/DecksList";

const DeckListScreen = ({ navigation }) => {
  return (
    <CustomSafeAreaView>
      <Text>Decks List</Text>
      <DecksList />
      <Button
        title="Deck one"
        onPress={() =>
          navigation.navigate("DeckScreen", {
            lala: "deck #1",
          })
        }
      />
    </CustomSafeAreaView>
  );
};

export default DeckListScreen;
