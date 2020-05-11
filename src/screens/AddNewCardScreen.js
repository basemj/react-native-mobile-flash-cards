import React from "react";
import { Text, View } from "react-native";

const AddNewCardScreen = ({ route }) => {
  return (
    <View>
      <Text>New card: {route.params.lala}</Text>
    </View>
  );
};

export default AddNewCardScreen;
