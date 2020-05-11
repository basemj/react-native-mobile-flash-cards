import React from "react";
import { Text, View, Button } from "react-native";

const DeckScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>Deck Screen: {route.params.lala}</Text>
      <Button
        title="Start Quiz"
        onPress={() =>
          navigation.navigate("QuizScreen", {
            lala: "Quiz #1",
          })
        }
      />
      <Button
        title="Add Card"
        onPress={() =>
          navigation.navigate("AddNewCardScreen", {
            lala: "add card to deck #1",
          })
        }
      />
    </View>
  );
};

export default DeckScreen;
