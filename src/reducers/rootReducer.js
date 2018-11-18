import { combineReducers } from "redux";
import numDisplayReducer from "./numDisplayReducer.js";
import opDisplayReducer from "./opDisplayReducer.js";
import numbersReducer from "./numbersReducer.js";

export default combineReducers({
  numbersReducer,
  numDisplayReducer,
  opDisplayReducer
});
