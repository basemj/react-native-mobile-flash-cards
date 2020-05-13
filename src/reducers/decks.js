import {
  ADD_CARD_TO_DECK,
  ADD_DECK,
  DELETE_DECK,
  GET_ALL_DECKS,
} from "../actions/decks";

const decks = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK: {
      const { deckId, questionSet } = action;

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
      const { title } = action;
      const id = title.trim();
      const newDeck = {
        id,
        title,
        questions: [],
      };

      return {
        ...state,
        [id]: newDeck,
      };
    }

    case DELETE_DECK: {
      const { deckId } = action;
      const newState = { ...state };

      if (newState[deckId]) {
        delete newState[deckId];

        return newState;
      }
    }

    case GET_ALL_DECKS: {
      return {
        ...state,
        ...action.decks,
      };
    }

    default:
      return state;
  }
};

export default decks;
