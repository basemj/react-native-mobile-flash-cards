import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetAllDecks } from "../actions/decks";
import { View, FlatList, Text } from "react-native";

class DecksList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetAllDecks());
  }

  render() {
    const { decksArray } = this.props;
    return (
      <View>
        <FlatList
          data={decksArray}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
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
