import { AsyncStorage } from "react-native";

const DECK_SORAGE_KEY = "@MobileFlashCards:decks";

const getAllDecks = () => {
  return await AsyncStorage.getItem(DECK_SORAGE_KEY)
    .then((decks) => {
      if(decks !== null) {
        return JSON.parse(decks);
      } else {
        return {};
      }
    }).catch((error) => {
      return error;
    });
};

const getDeck = () => {};

const addDeck = () => {};

const deleteDeck = () => {};

const addCardToDeck = () => {};

export { getAllDecks, getDeck, addDeck, deleteDeck, addCardToDeck };
