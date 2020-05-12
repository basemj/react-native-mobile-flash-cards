import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetAllDecks } from "../actions/decks";
import { Text } from "react-native";
import { Content, List, ListItem, Body, Right, Icon } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

class DecksList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetAllDecks());
  }

  render() {
    const { decksArray, navigation } = this.props;
    return (
      <Content>
        <List>
          {decksArray.map((deck) => (
            <TouchableOpacity
              key={deck.id}
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
                    {deck.questions.length} Cards
                  </Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
          ))}
        </List>
      </Content>
    );
  }
}

const mapStateToProps = ({ decks }, ownProps) => {
  const decksArray = Object.keys(decks).map((deck) => decks[deck]);
  return {
    decksArray,
  };
};

export default connect(mapStateToProps)(DecksList);
