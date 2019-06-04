import { NEW_SEARCH, NEW_SEARCH_FULFILLED, NEW_SEARCH_LOADING, NEW_SEARCH_ERROR } from '../actions/cardSearchActions';

export default function searchReducer(state = {}, action) {
  switch(action.type) {
    case NEW_SEARCH: 
      return { ...state,
        currentSearchOptions: action.payload,
        recentSearchOptions: [...state.recentSearchOptions, action.payload],
        currentSearchResults: action.payload.searchResults
      };
  
    default: 
      return state;
  }
}
