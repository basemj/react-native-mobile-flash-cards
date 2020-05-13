import React from "react";
import Quiz from "../components/Quiz";

const DeckScreen = ({ route, navigation }) => {
  const { deckId, questions } = route.params;

  return <Quiz deckId={deckId} questions={questions} navigation={navigation} />;
};

export default DeckScreen;
