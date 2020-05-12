import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import decks from "./src/reducers/decks";

export default createStore(
  combineReducers({
    decks,
  }),
  applyMiddleware(thunk, logger)
);
