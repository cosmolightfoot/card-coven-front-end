import { makeSearchUrl, colorsToString } from './makeSearchUrl';
import initialSearchState from '../../data/initialSearchState';

const allColorOr = {

  colors: {  black: true,
    white: true, 
    red: true,
    blue: true,
    green: true,
    exclusivity: '$OR$'
  },
  selectedFormat: '$DEFAULT$',
  selectedSet: '$DEFAULT$',
  selectedType: '$DEFAULT$',
  selectedSubtype: '$DEFAULT$'
};
const allColorAnd = {
  colors: {
    black: true,
    white: true, 
    red: true,
    blue: true,
    green: true,
    exclusivity: '$AND$'
  }
};
const someColorsAnd = {
  colors: {
    black: false,
    white: true, 
    red: true,
    blue: true,
    green: false,
    exclusivity: '$AND$'
  },
  selectedFormat: '$DEFAULT$',
  selectedSet: '$DEFAULT$',
  selectedType: '$DEFAULT$',
  selectedSubtype: '$DEFAULT$'
};

const oneColor = {
  colors: {
    black: false,
    white: false, 
    red: true,
    blue: false,
    green: false,
    exclusivity: '$AND$'
  }
};

const noColor = {
  colors: {
    black: false,
    white: false, 
    red: false,
    blue: false,
    green: false,
    exclusivity: '$AND$'
  }
};

const defaultOptions = {
  selectedFormat: '$DEFAULT$',
  selectedSet: '$DEFAULT$',
  selectedType: '$DEFAULT$',
  selectedSubtype: '$DEFAULT$'
};

const allQuery = {
  cardName: 'progenitor hydra',
  colors: {
    black: true,
    white: true,
    blue: true,
    red: true,
    green: true,
    exclusivity: '$AND$'
  },
  selectedFormat: 'standard',
  selectedSet: 'core 2010',
  cardText: 'protection from everything',
  selectedType: 'creature',
  selectedSubtype: 'hydra'
};

describe('make search url test', () => {
  it('returns a basic card search url on default submission', () => {
    expect(makeSearchUrl(initialSearchState).toString()).toEqual('https://api.magicthegathering.io/v1/cards');
  });
  it('returns a url with a colors query', () => {
    expect(decodeURIComponent(makeSearchUrl({ ...allColorAnd, ...defaultOptions }).toString())).toEqual('https://api.magicthegathering.io/v1/cards?colors=black,white,red,green,blue');
  });
  it('returns a url with a cardName query', () => {
    expect(decodeURIComponent(makeSearchUrl({ cardName: 'Animar', ...noColor, ...defaultOptions }).toString()))
      .toEqual('https://api.magicthegathering.io/v1/cards?name=Animar');
  });
  it('returns a url with a format query', () => {
    expect(makeSearchUrl({ ...noColor, ...defaultOptions, selectedFormat: 'khans of tarkir' }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?format=khans+of+tarkir');
  });
  it('returns a url with a set query', () => {
    expect(makeSearchUrl({ ...noColor, ...defaultOptions, selectedSet: 'khans of tarkir' }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?sets=khans+of+tarkir');
  });
  it('returns a url with a card text query', () => {
    expect(makeSearchUrl({ ...noColor, cardText: 'destroy target creature', ...defaultOptions }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?text=destroy+target+creature');
  });
  it('returns a url with a card type query', () => {
    expect(makeSearchUrl({ ...defaultOptions, selectedType: 'land', ...noColor }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?types=land');
  });
  it('returns a url with a card subtype query', () => {
    expect(makeSearchUrl({ ...defaultOptions, selectedSubtype: 'vampire', ...noColor }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?subtypes=vampire');
  });
  it('returns a url with all queries', () => {
    expect(decodeURIComponent(makeSearchUrl(allQuery).toString()))
      .toEqual('https://api.magicthegathering.io/v1/cards?name=progenitor+hydra&colors=black,white,red,green,blue&format=standard&sets=core+2010&text=protection+from+everything&types=creature&subtypes=hydra');
  });
});

describe('colorToString test', () => {

  it('returns a piped string on or exclusivity', () => {
    expect(colorsToString(allColorOr.colors)).toEqual('black|white|red|green|blue');
  });
  it('returns a comma\'d string on and exclusivity', () => {
    expect(colorsToString(allColorAnd.colors)).toEqual('black,white,red,green,blue');
  });
  it('excludes false colors', () => {
    expect(colorsToString(someColorsAnd.colors)).toEqual('white,red,blue');
  });
  it('works with one color', () => {
    expect(colorsToString(oneColor.colors)).toEqual('red');
  });
});
