import React from "react";
import Deck from "../components/Deck";

const DeckScreen = ({ route, navigation }) => {
  return <Deck deck={route.params.deck} navigation={navigation} />;
};

export default DeckScreen;
