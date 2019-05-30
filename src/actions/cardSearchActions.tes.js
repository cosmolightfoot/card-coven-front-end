import { newSearch } from './cardSearchActions';

describe('Card Search Actions Tests', () => {
  it('new search action', () => {
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

    expect(newSearch(searchState)).toEqual({
      type: 'NEW_SEARCH_OPTIONS',
      payload: {
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
      }
    });
  });
});

