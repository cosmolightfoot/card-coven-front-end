import { CHANGE_NAME_VAL, CHANGE_TYPE_VAL, CHANGE_TEXT_VAL } from '../types/searchFormTypes';

const init = {
  cardName: '',
  typeLine: '',
  cardText: ''
};

export default function searchFormReducer(state = init, action) {
  switch(action.type) {
    case CHANGE_NAME_VAL: return {
      ...state,
      cardName: action.payload
    };
    case CHANGE_TYPE_VAL: return {
      ...state,
      typeLine: action.payload
    };
    case CHANGE_TEXT_VAL: return {
      ...state,
      cardText: action.payload
    };
      
    default: return state;
  }
} 
