import { CHANGE_NAME_VAL } from '../types/searchFormTypes';

const init = {
  cardName: ''
};

export default function searchFormReducer(state = init, action) {
  switch(action.type) {
    case CHANGE_NAME_VAL: return {
      ...state,
      cardName: action.payload
    };
      
    default: return state;
  }
} 
