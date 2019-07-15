import { NEW_SEARCH, NEW_SEARCH_FULFILLED, NEW_SEARCH_LOADING, NEW_SEARCH_ERROR } from '../actions/cardSearchActions';

const initState = {
  currentSearchOptions: {},
  recentSearchOptions: [],
  results: [],
  currentPage: 0,
  page: 0,
  count: 0,
  totalPages: 1,
  noSearches: true,
  loading: false,
  fulfilled: false,
  perPage: 50,
  hasResults: false,
  displaying: '0-0',
  hasMore: false,
  hasLess: false
};

export default function searchReducer(state = initState, action) {
  console.log('REDUCER', action.type, action.payload);
  switch(action.type) {
    case NEW_SEARCH: {
      console.log('PAGE', action.payload.page);
      return { 
        ...state,
        loading: false,
        currentSearchOptions: action.payload.searchOptions,
        recentSearchOptions: [...state.recentSearchOptions, action.payload.searchOptions],
        results: action.payload.results,
        currentPage: action.payload.page,
        totalPages: action.payload.totalPages,
        totalCount: action.payload.totalCount,
        displaying: action.payload.displaying,
        hasResults: action.payload.hasResults,
        hasLess: action.payload.hasLess,
        hasMore: action.payload.hasMore,
        noSearches: false
      };
    }

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
