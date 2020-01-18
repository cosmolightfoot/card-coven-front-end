import searchReducer from './searchReducer';
import { selectCardDetail } from '../actions/cardSearchActions';


describe('search reducer tests', () => {

  const initState = {
    currentSearchOptions: {},
    recentSearchOptions: [],
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

  // const searchState = {
  //   cardName: 'Animar',
  //   black: false,
  //   white: false,
  //   blue: false,
  //   red: false,
  //   green: false,
  //   exclusivity: '$OR$',
  //   commander: false,
  //   modern: false,
  //   standard: false,
  //   duel: false,
  //   penny: false,
  //   vintage: false,
  //   selectedSet: '$DEFAULT$',
  //   cardText: 'protection from black',
  //   selectedType: '$DEFAULT$',
  //   selectedSubtype: '$DEFAULT$'
  // };

  // const animarSearch = {
  //   currentSearchOptions: searchState,
  //   recentSearchOptions: [searchState],
  //   currentSearchResults: [],
  //   cardsOfInterest: []
  // };

  it('card select reducer', () => {
    expect(searchReducer(initState, selectCardDetail({ test: 'true' }))).toEqual({
      ...initState,
      selectedCard: { test: 'true' }
    });
  });

});


