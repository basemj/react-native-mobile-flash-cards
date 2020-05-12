import React from "react";
import { Text } from "react-native";
import { ListItem, Body, Right, Icon } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const DeckListItem = (props) => {
  const { deck, navigation } = props;
  const numberOfCards = deck.questions.length || 0;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DeckScreen", {
          deck,
        })
      }
    >
      <ListItem>
        <Body>
          <Text style={{ fontSize: 18 }}>{deck.title}</Text>
          <Text style={{ fontSize: 12, color: "grey", marginTop: 5 }}>
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
