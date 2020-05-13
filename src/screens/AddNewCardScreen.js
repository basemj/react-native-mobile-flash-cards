import React from "react";
import AddNewCard from "../components/AddNewCard";

const AddNewCardScreen = ({ route, navigation }) => {
  return <AddNewCard deckId={route.params.deckId} navigation={navigation} />;
};

export default AddNewCardScreen;
