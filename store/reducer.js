import {
  ADD_SYMBOL,
  DELETE_ONE,
  TOTAL_SUM,
  CLEAN_DISPLAY,
} from "./actionTypes";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (state.counter === 0) {
      return { ...state, counter: action.symbol };
    } else if (state.counter > 1) {
      return { ...state, counter: state.counter + action.symbol };
    }

  switch (action.type) {
    case ADD_SYMBOL:
      return { ...state, counter: state.counter + action.symbol };
    case TOTAL_SUM:
      try {
        return { ...state, counter: eval(state.counter) };
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
