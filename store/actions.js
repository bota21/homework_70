import {
  ADD_SYMBOL,
  TOTAL_SUM,
  DELETE_ONE,
  CLEAN_DISPLAY,
} from "./actionTypes";

export const addSymbol = (symbol) => {
  return { type: ADD_SYMBOL, symbol };
};
export const totalSum = () => {
  return { type: TOTAL_SUM };
};
export const deleteSymbol = () => {
  return { type: DELETE_ONE };
};
export const cleanDisplay = () => {
  return { type: CLEAN_DISPLAY };
};
