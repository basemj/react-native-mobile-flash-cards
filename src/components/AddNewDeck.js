import React, { Component } from "react";
import { Text, Platform, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Body,
  Button,
} from "native-base";

import { handleAddDeck } from "../actions/decks";

class AddNewDeck extends Component {
  state = {
    title: "",
  };

  handlePress = () => {
    this.props.dispatch(handleAddDeck(this.state.title)).then(() => {
      const { navigation } = this.props;
      this.setState({
        title: "",
      });
      navigation.navigate("DeckListScreen");
    });
  };

  handleChange = (title) => {
    this.setState({
      title,
    });
  };

  render() {
    const styles = StyleSheet.create({
      headerText: {
        fontSize: 20,
        color: Platform.OS === "ios" ? "#007aff" : "white",
      },
      button: { margin: 30, justifyContent: "center" },
      buttonText: { color: "white", fontSize: 18 },
    });

    return (
      <Container>
        <Header>
          <Body>
            <Text style={styles.headerText}>Add New Deck</Text>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Deck Name</Label>
              <Input
                value={this.state.title}
                onChangeText={this.handleChange}
              />
            </Item>
          </Form>
          <Button
            primary
            disabled={!this.state.title}
            style={styles.button}
            onPress={this.handlePress}
          >
            <Text style={styles.buttonText}>Create Deck</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect()(AddNewDeck);
