import { RETRIEVE_SET_NAMES, INITIALIZE_FORMATS } from '../types/assorted-data-types';


const initState = {
  setNames: [],
  gameFormats: []
};

export default function assortedDataReducer(state = initState, action) {
  switch(action.type) {
    case RETRIEVE_SET_NAMES: {
      return { ...state, setNames: action.payload };
    }
    case INITIALIZE_FORMATS: {
      return {
        ...state, gameFormats: action.payload
      };
    }
    default: return state;
  }
}
