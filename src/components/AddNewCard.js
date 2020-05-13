import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { handleAddCardToDeck } from "../actions/decks";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from "native-base";

class AddNewCard extends Component {
  state = {
    question: "",
    answer: "",
  };

  handlePress = () => {
    const { navigation, deckId } = this.props;
    const { question, answer } = this.state;
    this.props
      .dispatch(handleAddCardToDeck(deckId, { question, answer }))
      .then(() => {
        this.setState({
          question: "",
          answer: "",
        });
        navigation.navigate("DeckScreen", {
          deckId,
        });
      });
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Question</Label>
              <Input
                value={this.state.question}
                onChangeText={(value) => this.handleChange("question", value)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Answer</Label>
              <Input
                value={this.state.answer}
                onChangeText={(value) => this.handleChange("answer", value)}
              />
            </Item>
          </Form>
          <Button
            primary
            disabled={!this.state.question && !this.state.answer}
            style={{ margin: 30, justifyContent: "center" }}
            onPress={this.handlePress}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Create Card</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect()(AddNewCard);
