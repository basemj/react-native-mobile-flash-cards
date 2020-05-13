import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetAllDecks } from "../actions/decks";
import { Text, Platform, StyleSheet } from "react-native";
import { Content, List, Body, Container, Header } from "native-base";
import { setLocalNotification } from "../helpers/notifications";

import DeckListItem from "./DeckListItem";

class DecksList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    setLocalNotification();
    dispatch(handleGetAllDecks());
  }

  render() {
    const { decksArray, navigation } = this.props;

    const styles = StyleSheet.create({
      headerText: {
        fontSize: 20,
        color: Platform.OS === "ios" ? "#007aff" : "white",
      },
      noDecksText: {
        fontSize: 16,
        textAlign: "center",
        color: "grey",
        marginTop: 25,
      },
    });

    return (
      <Container>
        <Header>
          <Body>
            <Text style={styles.headerText}>Decks</Text>
          </Body>
        </Header>
        <Content>
          {decksArray.length ? (
            <List>
              {decksArray.map((deck) => (
                <DeckListItem
                  key={deck.id}
                  deck={deck}
                  navigation={navigation}
                />
              ))}
            </List>
          ) : (
            <Text style={styles.noDecksText}>No decks to display</Text>
          )}
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
