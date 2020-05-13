import React, { Component } from "react";
import { Text, Platform, View, StyleSheet } from "react-native";
import { Content, Button } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  clearLocalNotification,
  setLocalNotification,
} from "../helpers/notifications";

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

      clearLocalNotification().then(setLocalNotification);
      navigation.navigate("QuizResultsScreen", resultParams);
      this.setState(initialState);
    }
  };

  render() {
    const { questions } = this.props;
    const numberOfQuestions = (questions && questions.length) || 0;
    const { activeCard, showAnswer } = this.state;

    const styles = StyleSheet.create({
      view: { flex: 1 },
      content: { padding: 15 },
      topSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
      },
      info: {
        color: "grey",
        marginTop: 5,
      },
      answerToggle: {
        color: Platform.OS === "ios" ? "#007aff" : "blue",
        marginTop: 5,
      },
      questionText: { fontSize: 40, textAlign: "center" },
      buttonsWrapper: {
        justifyContent: "flex-end",
        maxHeight: 160,
        marginBottom: 15,
      },
      button: {
        marginVertical: 15,
        marginHorizontal: 30,
        justifyContent: "center",
      },
      buttonText: { color: "white", fontSize: 18 },
    });

    return (
      <View style={styles.view}>
        <Content style={styles.content}>
          <View style={styles.topSection}>
            <Text style={styles.info}>
              Question {activeCard + 1} of {numberOfQuestions}
            </Text>
            <TouchableOpacity onPress={this.toggleAnswer}>
              <Text style={styles.answerToggle}>
                Show {showAnswer ? "Question" : "Answer"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.questionText}>
            {showAnswer
              ? questions[activeCard].answer
              : questions[activeCard].question}
          </Text>
        </Content>
        <View style={styles.buttonsWrapper}>
          <Button
            success
            style={styles.button}
            onPress={() => this.submitAnswer(true)}
          >
            <Text style={styles.buttonText}>I knew that</Text>
          </Button>
          <Button
            danger
            style={styles.button}
            onPress={() => this.submitAnswer(false)}
          >
            <Text style={styles.buttonText}>Got it wrong</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Quiz;
