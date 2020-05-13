import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Content, Button } from "native-base";

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  content: { padding: 15 },
  smallText: {
    marginTop: 5,
    textAlign: "center",
  },
  score: { fontSize: 50, textAlign: "center" },
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

const QuizResults = (props) => {
  const { score, numberOfQuestions } = props.params;
  const { navigation } = props;

  return (
    <View style={styles.view}>
      <Content style={styles.content}>
        <Text style={styles.smallText}>You scored</Text>

        <Text style={styles.score}>{score}</Text>
        <Text style={styles.smallText}>
          Out of a possible {numberOfQuestions}
        </Text>
      </Content>
      <View style={styles.buttonsWrapper}>
        <Button
          success
          style={styles.button}
          onPress={() => navigation.navigate("QuizScreen")}
        >
          <Text style={styles.buttonText}>Try again</Text>
        </Button>
        <Button
          danger
          style={styles.button}
          onPress={() => navigation.navigate("DeckScreen")}
        >
          <Text style={styles.buttonText}>Go back to deck</Text>
        </Button>
      </View>
    </View>
  );
};

export default QuizResults;
