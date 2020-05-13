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

    return await AsyncStorage.setItem(
      DECK_SORAGE_KEY,
      JSON.stringify(updatedDecks)
    );
  } else {
    throw "You cannot add to a deck that does not exist.";
  }
};

const _addDeck = async (title) => {
  const decks = await _getAllDecks();

  const id = title.trim();

  const newDecks = {
    ...decks,
    [id]: {
      id,
      title,
      questions: [],
    },
  };

  return await AsyncStorage.setItem(DECK_SORAGE_KEY, JSON.stringify(newDecks));
};

const _deleteDeck = async (deckId) => {
  const decks = await _getAllDecks();

  if (decks[deckId]) {
    delete decks[deckId];

    return await AsyncStorage.setItem(DECK_SORAGE_KEY, JSON.stringify(decks));
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
        AsyncStorage.setItem(DECK_SORAGE_KEY, JSON.stringify({}));
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
