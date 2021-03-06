import {
  ADD_SYMBOL,
  DELETE_ONE,
  TOTAL_SUM,
  CLEAN_DISPLAY,
} from "./actionTypes";

const initialState = {
  counter: 0,
  initialValue: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      if (state.counter === 0) {
        return { ...state, counter: action.symbol };
      } else {
      return { ...state, counter: state.counter + action.symbol };
      }
    case TOTAL_SUM:
      try {
        const sum = eval(state.counter);
        return { ...state, counter: sum.toFixed(3) };
      } catch (e) {
        console.log(e);
      }
    case DELETE_ONE:
      if (state.counter.length > 1) {
        return {
          ...state,
          counter: state.counter.substring(0, state.counter.length - 1),
        };
      }
    case CLEAN_DISPLAY:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default reducer;
