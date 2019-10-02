import { SIMPLE_WHITE_MANA, SIMPLE_BLACK_MANA, SIMPLE_RED_MANA, SIMPLE_GREEN_MANA, SIMPLE_BLUE_MANA, SIMPLE_NAME_VAL } from '../types/simple-search-types';

const init = {
  black: false,
  red: false,
  green: false,
  blue: false,
  white: false,
  text: ''
};

export default function simpleFormReducer(state = init, action) {
  switch(action.type) {
    case SIMPLE_WHITE_MANA: {
      return {
        ...state,
        white: !state.white
      };
    }
   
    case SIMPLE_BLACK_MANA: {
      return {
        ...state,
        black: !state.black
      };
    }
   
    case SIMPLE_BLUE_MANA: {
      return {
        ...state,
        blue: !state.blue
      };
    }
   
    case SIMPLE_RED_MANA: {
      return {
        ...state,
        red: !state.red
      };
    }
   
    case SIMPLE_GREEN_MANA: {
      return {
        ...state,
        green: !state.green
      };
    }

    case SIMPLE_NAME_VAL: {
      return {
        ...state, text: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
