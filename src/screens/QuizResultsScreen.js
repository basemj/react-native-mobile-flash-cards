import React from "react";
import QuizResults from "../components/QuizResults";

const QuizResultsScreen = ({ route, navigation }) => {
  return <QuizResults params={route.params} navigation={navigation} />;
};

export default QuizResultsScreen;
