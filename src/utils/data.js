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
  const decks = await getAllDecks();

  return decks[id];
};

const addDeck = async (title) => {
  const id = title.trim();
  const newDeck = {
    id,
    title,
    questions: [],
  };

  return await AsyncStorage.mergeItem(
    DECK_SORAGE_KEY,
    JSON.stringify({ [id]: newDeck })
  );
};

const deleteDeck = async (id) => {
  const decks = await getAllDecks();
  if (decks[id]) {
    delete decks[id];

    await AsyncStorage.setItem(DECK_SORAGE_KEY, JSON.stringify(decks));
  }
};

const addCardToDeck = async (deckId, questionSet) => {
  const decks = await getAllDecks();

  if (decks[deckId]) {
    const updatedDeck = {
      ...decks[deckId],
      questions: [...decks[deckId].questions, questionSet],
    };

    const updatedDecks = {
      ...decks,
      updatedDeck,
    };

    await AsyncStorage.setItem(DECK_SORAGE_KEY, updatedDecks);
  }
};

export { getAllDecks, getDeck, addDeck, deleteDeck, addCardToDeck };
