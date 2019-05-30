import { newSearch } from './cardSearchActions';

describe('Card Search Actions Tests', () => {
  it('new search action', () => {
    const searchState = {
      cardName: 'Animar',
      colors: {
        black: false,
        white: false,
        blue: false,
        red: false,
        green: false,
        exclusivity: '$OR$'
      },
      selectedFormat: '$DEFAULT$',
      selectedSet: '$DEFAULT$',
      cardText: 'protection from black',
      selectedType: '$DEFAULT$',
      selectedSubtype: '$DEFAULT$'
    };

    expect(newSearch(searchState)).toEqual({
      type: 'NEW_SEARCH_OPTIONS',
      payload: {
        cardName: 'Animar',
        colors: {
          black: false,
          white: false,
          blue: false,
          red: false,
          green: false,
          exclusivity: '$OR$'
        },
        selectedFormat: '$DEFAULT$',
        selectedSet: '$DEFAULT$',
        cardText: 'protection from black',
        selectedType: '$DEFAULT$',
        selectedSubtype: '$DEFAULT$'
      }
    });
  });
});

