import {
  ADD_CARD_TO_DECK,
  ADD_DECK,
  DELETE_DECK,
  GET_ALL_DECKS,
} from "../actions/decks";

const initState = {
  react: {
    id: "react",
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  javascript: {
    id: "javascript",
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

const decks = (state = initState, action) => {
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
