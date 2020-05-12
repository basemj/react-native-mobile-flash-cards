import React, { Component } from "react";
import { Text, Platform } from "react-native";
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

  handleChange = (e) => {
    this.setState({
      title: e,
    });
  };

  render() {
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
              Add New Deck
            </Text>
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
            style={{ margin: 30, justifyContent: "center" }}
            onPress={this.handlePress}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Create</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect()(AddNewDeck);
