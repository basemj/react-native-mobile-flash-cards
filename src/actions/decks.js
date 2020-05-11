import data from "../utils/data";

const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
const ADD_DECK = "ADD_DECK";
const DELETE_DECK = "DELETE_DECK";
const GET_ALL_DECKS = "GET_ALL_DECKS";
const GET_DECK = "GET_DECK";

const handleAddCardToDeck = (deckId, questionSet) => {
  return (dispatch) => {
    return data
      .addCardToDeck(deckId, questionSet)
      .then(({ deckId, questionSet }) => {
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

const handleAddDeck = () => {};

const addDeck = () => {};

const handleDeleteDeck = () => {};

const deleteDeck = () => {};

const handleGetAllDecks = () => {};

const getAllDecks = () => {};

const handleGetDeck = () => {};

const getDeck = () => {};

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
