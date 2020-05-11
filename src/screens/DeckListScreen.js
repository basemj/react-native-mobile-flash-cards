import React from "react";
import { Text, Button } from "react-native";

import CustomSafeAreaView from "../helpers/CustomSafeAreaView";

const DeckListScreen = ({ navigation }) => {
  return (
    <CustomSafeAreaView>
      <Text>Decks List</Text>
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
