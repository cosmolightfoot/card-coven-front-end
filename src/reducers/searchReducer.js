import { NEW_SEARCH_OPTIONS } from '../actions/cardSearchActions';
import { findRepos } from "jest-changed-files";

export default function searchReducer(state, action) {
  switch(action.type) {
    case NEW_SEARCH_OPTIONS: 
      return { ...state, currentSearchOptions: action.payload, recentSearchOptions: [...state.recentSearchOptions, action.payload] };
  
    default: 
      return state;
  }
}
