import React from "react";
import { Text, View, Alert, Platform, StyleSheet } from "react-native";
import { Button, Content } from "native-base";
import { connect } from "react-redux";

import { handleDeleteDeck } from "../actions/decks";

const styles = StyleSheet.create({
  view: { flex: 1 },
  content: { padding: 15 },
  deckTitle: { fontSize: 40, textAlign: "center" },
  cardCount: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
    marginTop: 5,
  },
  buttonsWrapper: {
    justifyContent: "flex-end",
    maxHeight: 230,
    marginBottom: 15,
  },
  button: {
    marginHorizontal: 30,
    marginVertical: 15,
    justifyContent: "center",
  },
  buttonText: { color: "white", fontSize: 18 },
});

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
    <View style={styles.view}>
      <Content style={styles.content}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.cardCount}>
          {numberOfCards} {numberOfCards === 1 ? "Card" : "Cards"}
        </Text>
      </Content>
      <View style={styles.buttonsWrapper}>
        <Button
          success
          disabled={!deck.questions.length}
          style={styles.button}
          onPress={() =>
            navigation.navigate("QuizScreen", {
              deckId,
              questions: deck.questions,
            })
          }
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </Button>
        <Button
          info
          style={styles.button}
          onPress={() =>
            navigation.navigate("AddNewCardScreen", {
              deckId,
            })
          }
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </Button>
        <Button
          danger
          style={styles.button}
          onPress={Platform.OS === "web" ? deleteDeck : confirmDelete}
        >
          <Text style={styles.buttonText}>Delete Deck</Text>
        </Button>
      </View>
    </View>
  );
};

const mapStateToProps = ({ decks }, { deckId }) => {
  const deck = decks[deckId];

  return {
    deck,
  };
};

export default connect(mapStateToProps)(Deck);
