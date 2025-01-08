import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";

import { quotesSlice } from "../Reducers/quoteSlice";
const rootReducer = combineReducers({
  quote: quotesSlice,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
