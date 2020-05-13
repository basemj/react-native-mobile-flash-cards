import React from "react";
import { Text, View, Alert, Platform } from "react-native";
import { Button, Content } from "native-base";
import { connect } from "react-redux";

import { handleDeleteDeck } from "../actions/decks";

const Deck = (props) => {
  const { deckId, deck, navigation, dispatch } = props;

  if (!deck) {
    navigation.navigate("DeckListScreen");
    return null;
  }

  const numberOfCards = deck.questions.length || 0;

  const deleteDeck = () => {
    dispatch(handleDeleteDeck(deckId));
  };

  const confirmDelete = () => {
    Alert.alert(
      "Delete Deck",
      `Are you sure you want to delete ${deck.title}?`,
      [
        { text: "NO", style: "cancel" },
        {
          text: "DELETE",
          onPress: deleteDeck,
        },
      ]
    );
  };

  return (
    <Content>
      <View style={{ marginVertical: 30 }}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>{deck.title}</Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
            marginTop: 5,
          }}
        >
          {numberOfCards} {numberOfCards === 1 ? "Card" : "Cards"}
        </Text>
      </View>
      <View>
        <Button
          success
          disabled={!deck.questions.length}
          style={{ margin: 30, justifyContent: "center" }}
          onPress={() =>
            navigation.navigate("QuizScreen", {
              deckId,
              questions: deck.questions,
            })
          }
        >
          <Text style={{ color: "white", fontSize: 18 }}>Start Quiz</Text>
        </Button>
        <Button
          info
          style={{ margin: 30, justifyContent: "center" }}
          onPress={() =>
            navigation.navigate("AddNewCardScreen", {
              deckId,
            })
          }
        >
          <Text style={{ color: "white", fontSize: 18 }}>Add Card</Text>
        </Button>
        <Button
          danger
          style={{
            marginHorizontal: 30,
            marginBottom: 30,
            justifyContent: "center",
          }}
          onPress={Platform.OS === "web" ? deleteDeck : confirmDelete}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Delete Deck</Text>
        </Button>
      </View>
    </Content>
  );
};

const mapStateToProps = ({ decks }, { deckId }) => {
  const deck = decks[deckId];

  return {
    deck,
  };
};

export default connect(mapStateToProps)(Deck);
