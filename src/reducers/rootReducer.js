import { combineReducers } from "redux";
import numDisplayReducer from "./numDisplayReducer.js";
import opDisplayReducer from "./opDisplayReducer.js";
import eqDisplayReducer from "./eqDisplayReducer.js";
import clrDisplayReducer from "./clrDisplayReducer.js";
import numbersReducer from "./numbersReducer.js";
// import operatorsReducer from "./operatorsReducer.js";

export default combineReducers({
  numbersReducer,
  eqDisplayReducer,
  clrDisplayReducer,
  numDisplayReducer,
  opDisplayReducer
});
