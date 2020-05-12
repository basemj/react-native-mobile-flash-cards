import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetAllDecks } from "../actions/decks";
import { Text, Platform } from "react-native";
import { Content, List, Body, Container, Header } from "native-base";

import DeckListItem from "./DeckListItem";

class DecksList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetAllDecks());
  }

  render() {
    const { decksArray, navigation } = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Text
              style={{
                fontSize: 20,
                color: Platform.OS === "ios" ? "#007aff" : "white",
              }}
            >
              Decks
            </Text>
          </Body>
        </Header>
        <Content>
          <List>
            {decksArray.map((deck) => (
              <DeckListItem key={deck.id} deck={deck} navigation={navigation} />
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ decks }) => {
  const decksArray = Object.keys(decks).map((deck) => decks[deck]);
  return {
    decksArray,
  };
};

export default connect(mapStateToProps)(DecksList);
