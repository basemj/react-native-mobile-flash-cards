import React from "react";
import { Text, View } from "react-native";
import { Content, Button } from "native-base";

const QuizResults = (props) => {
  const { score, numberOfQuestions } = props.params;
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <Content style={{ padding: 15 }}>
        <Text
          style={{
            marginTop: 5,
            textAlign: "center",
          }}
        >
          You scored
        </Text>

        <Text style={{ fontSize: 50, textAlign: "center" }}>{score}</Text>
        <Text
          style={{
            marginTop: 5,
            textAlign: "center",
          }}
        >
          Out of a possible {numberOfQuestions}
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
          onPress={() => navigation.navigate("QuizScreen")}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Try again</Text>
        </Button>
        <Button
          danger
          style={{
            marginVertical: 15,
            marginHorizontal: 30,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("DeckScreen")}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Go back to deck</Text>
        </Button>
      </View>
    </View>
  );
};

export default QuizResults;
