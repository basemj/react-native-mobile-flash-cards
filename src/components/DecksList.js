import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetAllDecks } from "../actions/decks";
import { Text, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Content,
  List,
  ListItem,
  Body,
  Right,
  Icon,
  Container,
  Header,
  Title,
} from "native-base";

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
