import React from "react";

import CustomSafeAreaView from "../helpers/CustomSafeAreaView";
import AddNewDeck from "../components/AddNewDeck";

const AddNewDeckScreen = ({ navigation }) => {
  return (
    <CustomSafeAreaView>
      <AddNewDeck navigation={navigation} />
    </CustomSafeAreaView>
  );
};

export default AddNewDeckScreen;
