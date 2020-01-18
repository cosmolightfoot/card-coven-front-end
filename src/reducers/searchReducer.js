import {
  SELECT_CARD_DETAIL,
  NEW_SIMPLE_SEARCH_LOADING,
  NEW_SEARCH,
  NEW_SEARCH_LOADING,
  NEW_SEARCH_ERROR,
  NEW_SIMPLE_SEARCH,
  NEW_SIMPLE_SEARCH_ERROR
} from '../types/card-search-types';

const initState = {
  currentSearch: {},
  recentSearches: [],
  selectedCard: {},
  results: [],
  currentPage: 0,
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
  switch(action.type) {
    case NEW_SEARCH: {
      return {
        ...state,
        loading: false,
        currentSearch: { searchOptions: action.payload.searchOptions, searchType: 'advanced' },
        recentSearches: [
          ...state.recentSearches,
          { searchOptions: action.payload.searchOptions, searchType: 'advanced' }
        ],
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

    case NEW_SEARCH_ERROR:
      return { ...state, error: action.payload };

    case SELECT_CARD_DETAIL:
      return { ...state, selectedCard: action.payload };

    case NEW_SIMPLE_SEARCH:
      return {
        ...state,
        loading: false,
        currentSearch: { searchOptions: action.payload.searchOptions, searchType: 'simple' },
        recentSearches: [
          ...state.recentSearches,
          { searchOptions: action.payload.searchOptions, searchType: 'simple' }
        ],
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

    case NEW_SIMPLE_SEARCH_LOADING:
      return { ...state, loading: true };

    case NEW_SIMPLE_SEARCH_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
