import React from "react";
import Deck from "../components/Deck";

const DeckScreen = ({ route, navigation }) => {
  return <Deck deckId={route.params.deckId} navigation={navigation} />;
};

export default DeckScreen;
