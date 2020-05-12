import { AsyncStorage } from "react-native";

const DECK_SORAGE_KEY = "@MobileFlashCards:decks";

const _addCardToDeck = async (deckId, questionSet) => {
  const decks = await _getAllDecks();

  if (decks[deckId]) {
    const updatedDeck = {
      ...decks[deckId],
      questions: [...decks[deckId].questions, questionSet],
    };

    const updatedDecks = {
      ...decks,
      [deckId]: updatedDeck,
    };

    await AsyncStorage.setItem(DECK_SORAGE_KEY, updatedDecks);
  } else {
    throw "You cannot add to a deck that does not exist.";
  }
};

const _addDeck = async (title) => {
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

const _deleteDeck = async (deckId) => {
  const decks = await _getAllDecks();

  if (decks[deckId]) {
    delete decks[deckId];

    await AsyncStorage.setItem(DECK_SORAGE_KEY, JSON.stringify(decks));
  } else {
    throw "Cannot find deck to delete.";
  }
};

const _getAllDecks = async () => {
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

const _getDeck = async (deckId) => {
  const decks = await _getAllDecks();

  return decks[deckId];
};

export { _addCardToDeck, _addDeck, _deleteDeck, _getAllDecks, _getDeck };
