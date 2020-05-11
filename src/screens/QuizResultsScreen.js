import React from "react";
import { Text, View, Button } from "react-native";

const QuizResultsScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>Results for: {route.params.lala}</Text>
      <Button
        title="Restart Quiz"
        onPress={() =>
          navigation.navigate("QuizScreen", {
            lala: "Quiz #1",
          })
        }
      />
      <Button
        title="Back to Deck"
        onPress={() =>
          navigation.navigate("DeckScreen", {
            lala: "deck #1",
          })
        }
      />
    </View>
  );
};

export default QuizResultsScreen;
