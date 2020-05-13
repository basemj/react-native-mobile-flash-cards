import React from "react";
import { Text, StyleSheet } from "react-native";
import { ListItem, Body, Right, Icon } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  title: { fontSize: 18 },
  cardCount: { fontSize: 12, color: "grey", marginTop: 5 },
});

const DeckListItem = (props) => {
  const { deck, navigation } = props;
  const numberOfCards = deck.questions.length || 0;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DeckScreen", {
          deckId: deck.id,
          deckTitle: deck.title,
        })
      }
    >
      <ListItem>
        <Body>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardCount}>
            {numberOfCards} {numberOfCards === 1 ? "Card" : "Cards"}
          </Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    </TouchableOpacity>
  );
};

export default DeckListItem;
