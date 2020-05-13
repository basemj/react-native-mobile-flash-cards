import React, { Component } from "react";
import { Text, Platform, View } from "react-native";
import { Content, Button } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const initialState = {
  activeCard: 0,
  score: 0,
  showAnswer: false,
};

class Quiz extends Component {
  state = initialState;

  toggleAnswer = () => {
    this.setState({
      showAnswer: !this.state.showAnswer,
    });
  };

  submitAnswer = (answer) => {
    const { activeCard, score } = this.state;
    const { deckId, questions, navigation } = this.props;
    const nextCard = activeCard + 1;
    const newScore = answer ? score + 1 : score;

    if (nextCard < questions.length) {
      this.setState({
        activeCard: nextCard,
        score: newScore,
        showAnswer: false,
      });
    } else {
      const resultParams = {
        score: newScore,
        numberOfQuestions: questions.length,
        deckId,
      };
      navigation.navigate("QuizResultsScreen", resultParams);
      this.setState(initialState);
    }
  };

  render() {
    const { questions } = this.props;
    const numberOfQuestions = (questions && questions.length) || 0;
    const { activeCard, showAnswer } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Content style={{ padding: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                color: "grey",
                marginTop: 5,
              }}
            >
              Question {activeCard + 1} of {numberOfQuestions}
            </Text>
            <TouchableOpacity onPress={this.toggleAnswer}>
              <Text
                style={{
                  color: Platform.OS === "ios" ? "#007aff" : "blue",
                  marginTop: 5,
                }}
              >
                Show {showAnswer ? "Question" : "Answer"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            {showAnswer
              ? questions[activeCard].answer
              : questions[activeCard].question}
          </Text>
        </Content>
        <View
          style={{
            justifyContent: "flex-end",
            maxHeight: 160,
            marginBottom: 15,
          }}
        >
          <Button
            success
            style={{
              marginVertical: 15,
              marginHorizontal: 30,
              justifyContent: "center",
            }}
            onPress={() => this.submitAnswer(true)}
          >
            <Text style={{ color: "white", fontSize: 18 }}>I knew that</Text>
          </Button>
          <Button
            danger
            style={{
              marginVertical: 15,
              marginHorizontal: 30,
              justifyContent: "center",
            }}
            onPress={() => this.submitAnswer(false)}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Got it wrong</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Quiz;
