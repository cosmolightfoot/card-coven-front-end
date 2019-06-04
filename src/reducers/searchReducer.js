import { NEW_SEARCH, NEW_SEARCH_FULFILLED, NEW_SEARCH_LOADING, NEW_SEARCH_ERROR } from '../actions/cardSearchActions';

export default function searchReducer(state = {}, action) {
  switch(action.type) {
    case NEW_SEARCH: 
      return { ...state,
        loading: false,
        currentSearchOptions: action.payload.searchOptions,
        recentSearchOptions: [...state.recentSearchOptions, action.payload.searchOptions],
        currentSearchResults: action.payload.searchResults,
        totalPages: action.payload.totalPages,
        count: action.payload.count,
        noSearches: false
      };

    case NEW_SEARCH_LOADING:
      return { ...state, loading: true };

    case NEW_SEARCH_FULFILLED: 
      return { ...state, loading: false };

    case NEW_SEARCH_ERROR: 
      return { ...state, error: action.payload };
  
    default: 
      return state;
  }
}
