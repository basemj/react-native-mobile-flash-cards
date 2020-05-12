import React from "react";

import CustomSafeAreaView from "../helpers/CustomSafeAreaView";

import DecksList from "../components/DecksList";

const DeckListScreen = ({ navigation }) => {
  return (
    <CustomSafeAreaView>
      <DecksList navigation={navigation} />
    </CustomSafeAreaView>
  );
};

export default DeckListScreen;
