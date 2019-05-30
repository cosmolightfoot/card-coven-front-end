import searchReducer from './searchReducer';
import { newSearch } from '../actions/cardSearchActions';


describe('search reducer tests', () => {

  const initialState = {
    currentSearchOptions: {},
    recentSearchOptions: [],
    currentSearchResults: [],
    cardsOfInterest: []
  };

  const searchState = {
    cardName: 'Animar',
    black: false,
    white: false,
    blue: false,
    red: false,
    green: false,
    exclusivity: '$OR$',
    commander: false,
    modern: false,
    standard: false,
    duel: false,
    penny: false,
    vintage: false,
    selectedSet: '$DEFAULT$',
    cardText: 'protection from black',
    selectedType: '$DEFAULT$',
    selectedSubtype: '$DEFAULT$'
  };

  const animarSearch = {
    currentSearchOptions: searchState,
    recentSearchOptions: [searchState],
    currentSearchResults: [],
    cardsOfInterest: []
  };

  it('adds a new search to state', () => {
    expect(searchReducer(initialState, newSearch(searchState))).toEqual(animarSearch);
  });

});


