import {
  _addCardToDeck,
  _addDeck,
  _deleteDeck,
  _getAllDecks,
  _getDeck,
} from "../utils/data";

const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
const ADD_DECK = "ADD_DECK";
const DELETE_DECK = "DELETE_DECK";
const GET_ALL_DECKS = "GET_ALL_DECKS";
const GET_DECK = "GET_DECK";

const handleAddCardToDeck = (deckId, questionSet) => {
  return (dispatch) => {
    return _addCardToDeck(deckId, questionSet)
      .then(() => {
        return dispatch(addCardToDeck(deckId, questionSet));
      })
      .catch((error) => {
        return error;
      });
  };
};

const addCardToDeck = (deckId, questionSet) => {
  return {
    type: ADD_CARD_TO_DECK,
    deckId,
    questionSet,
  };
};

const handleAddDeck = (title) => {
  return (dispatch) => {
    return _addDeck(title).then(() => {
      return dispatch(addDeck(title));
    });
  };
};

const addDeck = (title) => {
  return {
    key: ADD_DECK,
    title,
  };
};

const handleDeleteDeck = (deckId) => {
  return (dispatch) => {
    return _deleteDeck(deckId)
      .then(() => {
        return dispatch(deleteDeck(deckId));
      })
      .catch((error) => {
        return error;
      });
  };
};

const deleteDeck = (deckId) => {
  return {
    type: DELETE_DECK,
    deckId,
  };
};

const handleGetAllDecks = () => {
  return (dispatch) => {
    _getAllDecks()
      .then((decks) => dispatch(getAllDecks(decks)))
      .catch((error) => {
        return error;
      });
  };
};

const getAllDecks = (decks) => {
  return {
    type: GET_ALL_DECKS,
    decks,
  };
};

const handleGetDeck = (deckId) => {
  return (dispatch) => {
    return _getDeck(deckId).then(() => {
      return dispatch(getDeck(deckId));
    });
  };
};

const getDeck = (deckId) => {
  return {
    key: GET_DECK,
    deckId,
  };
};

export {
  ADD_CARD_TO_DECK,
  ADD_DECK,
  DELETE_DECK,
  GET_ALL_DECKS,
  GET_DECK,
  handleAddCardToDeck,
  handleAddDeck,
  handleDeleteDeck,
  handleGetAllDecks,
  handleGetDeck,
};
