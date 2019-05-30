import { NEW_SEARCH_OPTIONS } from '../actions/cardSearchActions';

export default function searchReducer(state = {}, action) {
  switch(action.type) {
    case NEW_SEARCH_OPTIONS: 
      return { ...state,
        currentSearchOptions: action.payload,
        recentSearchOptions: [...state.recentSearchOptions, action.payload],
        currentSearchResults: action.payload.searchResults
      };
  
    default: 
      return state;
  }
}
