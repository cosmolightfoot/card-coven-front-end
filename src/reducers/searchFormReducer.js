import { CHANGE_NAME_VAL, CHANGE_TYPE_VAL, CHANGE_TEXT_VAL, CHECK_BLACK_MANA, CHECK_WHITE_MANA, CHECK_RED_MANA, CHECK_GREEN_MANA, CHECK_BLUE_MANA, CHECK_EXACT_COLORS, CHECK_EXCLUDE_COLORS, SELECT_CARD_FORMAT, PUSH_CARD_FORMAT, INIT_AVAIL_FORMATS, REMOVE_AVAIL_FORMAT, REMOVE_CARD_FORMAT, PUSH_AVAIL_FORMAT, INIT_AVAIL_SETS, SELECT_CARD_SET, PUSH_AVAIL_SET, PUSH_CARD_SET, REMOVE_AVAIL_SET, REMOVE_CARD_SET, INIT_AVAIL_SORT, SELECT_SORT_FILTER, SELECT_SORT_DIRECTION, PUSH_SORT_FILTER, REMOVE_AVAIL_SORT, REMOVE_SORT_FILTER, PUSH_AVAIL_SORT, UPDATE_SELECTED_SETS } from '../types/search-form-types';

const init = {
  cardName: '',
  typeLine: '',
  cardText: '',
  black: false,
  white: false,
  red: false,
  green: false,
  blue: false,
  exact: false,
  exclude: false,
  availGameFormats: [],
  selectedFormat: '',
  formats: [],
  selectedSets: [],
  availSortFilters: [],
  selectedFilter: '',
  sortDirection: '1',
  sortFilters: []
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
    case CHECK_BLACK_MANA: return {
      ...state,
      black: !state.black
    };
    case CHECK_WHITE_MANA: return {
      ...state,
      white: !state.white
    };
    case CHECK_RED_MANA: return {
      ...state,
      red: !state.red
    };
    case CHECK_GREEN_MANA: return {
      ...state,
      green: !state.green
    };
    case CHECK_BLUE_MANA: return {
      ...state,
      blue: !state.blue
    };
    case CHECK_EXACT_COLORS: return {
      ...state,
      exact: !state.exact
    };
    case CHECK_EXCLUDE_COLORS: return {
      ...state,
      exclude: !state.exclude
    };
    case INIT_AVAIL_FORMATS: return {
      ...state,
      availGameFormats: action.payload
    };
    case REMOVE_AVAIL_FORMAT: return {
      ...state,
      availGameFormats: state.availGameFormats.filter(format => format !== state.selectedFormat)
    };
    case SELECT_CARD_FORMAT: return {
      ...state,
      selectedFormat: action.payload
    };
    case PUSH_CARD_FORMAT: return {
      ...state,
      formats: [...state.formats, state.selectedFormat]
    };
    case REMOVE_CARD_FORMAT: return {
      ...state,
      formats: state.formats.filter(format => format !== action.payload)
    };
    case PUSH_AVAIL_FORMAT: return {
      ...state,
      availGameFormats: [...state.availGameFormats, action.payload]
    };
    case INIT_AVAIL_SORT: return {
      ...state,
      availSortFilters: action.payload
    };
    case SELECT_SORT_FILTER: return {
      ...state,
      selectedFilter: action.payload
    };
    case SELECT_SORT_DIRECTION: return {
      ...state,
      sortDirection: action.payload
    };
    case PUSH_SORT_FILTER: return {
      ...state,
      sortFilters: [...state.sortFilters, { filter: state.selectedFilter, direction: state.sortDirection }]
    };
    case REMOVE_AVAIL_SORT: return {
      ...state,
      availSortFilters: state.availSortFilters.filter(filter => filter !== state.selectedFilter)
    };
    case REMOVE_SORT_FILTER: return {
      ...state,
      sortFilters: state.sortFilters.filter(filter => filter !== action.payload)
    };
    
    case PUSH_AVAIL_SORT: return {
      ...state,
      availSortFilters: [...state.availSortFilters, action.payload.filter]
    };
    case UPDATE_SELECTED_SETS: return {
      ...state,
      selectedSets: action.payload
    };
      
    default: return state;
  }
} 
