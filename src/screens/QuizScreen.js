import React from "react";
import { Text, View, Button } from "react-native";

const DeckScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>Deck Page: {route.params.lala}</Text>
      <Button
        title="Results"
        onPress={() =>
          navigation.navigate("QuizResultsScreen", {
            lala: "quiz #1",
          })
        }
      />
    </View>
  );
};

export default DeckScreen;
