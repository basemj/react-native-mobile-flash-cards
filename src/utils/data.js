import { AsyncStorage } from "react-native";

const DECK_SORAGE_KEY = "@MobileFlashCards:decks";

const getAllDecks = async () => {
  return await AsyncStorage.getItem(DECK_SORAGE_KEY)
    .then((decks) => {
      if (decks !== null) {
        return JSON.parse(decks);
      } else {
        return {};
      }
    })
    .catch((error) => {
      return error;
    });
};

const getDeck = async (id) => {
  return await getAllDecks()
    .then((decks) => {
      return decks[id];
    })
    .catch((error) => {
      return error;
    });
};

const addDeck = async (title) => {
  const id = title.trim();
  const newDeck = {
    title,
    questions: [],
  };

  return await AsyncStorage.mergeItem(
    DECK_SORAGE_KEY,
    JSON.stringify({ [id]: newDeck })
  );
};

const deleteDeck = async () => {};

const addCardToDeck = async () => {};

export { getAllDecks, getDeck, addDeck, deleteDeck, addCardToDeck };
