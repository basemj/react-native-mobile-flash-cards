import {
  ADD_CARD_TO_DECK,
  ADD_DECK,
  DELETE_DECK,
  GET_ALL_DECKS,
} from "../actions/decks";

const decks = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_CARD_TO_DECK: {
      const { deckId, questionSet } = payload;

      if (state[deckId]) {
        const updatedDeck = {
          ...state[deckId],
          questions: [...state[deckId].questions, questionSet],
        };

        return {
          ...state,
          [deckId]: updatedDeck,
        };
      }
    }

    case ADD_DECK: {
      const id = payload.trim();
      const newDeck = {
        id,
        title: payload,
        questions: [],
      };

      return {
        ...state,
        [id]: newDeck,
      };
    }

    case DELETE_DECK: {
      const newState = { ...state };

      if (newState[payload]) {
        delete newState[payload];

        return newState;
      }
    }

    case GET_ALL_DECKS: {
      return {
        ...state,
        ...payload,
      };
    }

    default:
      return state;
  }
};

export default decks;
