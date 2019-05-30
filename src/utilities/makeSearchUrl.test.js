import { makeSearchUrl, colorsToString } from './makeSearchUrl';
import initialSearchState from '../../data/initialSearchState';

const allColorOr = {
  black: true,
  white: true, 
  red: true,
  blue: true,
  green: true,
  exclusivity: '$OR$'
};
const allColorAnd = {
  black: true,
  white: true, 
  red: true,
  blue: true,
  green: true,
  exclusivity: '$AND$'
};
const someColorsAnd = {
  black: false,
  white: true, 
  red: true,
  blue: true,
  green: false,
  exclusivity: '$AND$'
};

const oneColor = {
  black: false,
  white: false, 
  red: true,
  blue: false,
  green: false,
  exclusivity: '$AND$'
};

const noColor = {
  black: false,
  white: false, 
  red: false,
  blue: false,
  green: false,
  exclusivity: '$AND$'
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
}

describe('make search url test', () => {
  it('returns a basic card search url on default submission', () => {
    expect(makeSearchUrl(initialSearchState).toString()).toEqual('https://api.magicthegathering.io/v1/cards');
  });
  it('returns a url with a colors query', () => {
    expect(decodeURIComponent(makeSearchUrl({ colors: allColorAnd }).toString())).toEqual('https://api.magicthegathering.io/v1/cards?colors=black,white,red,green,blue');
  });
  it('returns a url with a cardName query', () => {
    expect(decodeURIComponent(makeSearchUrl({ cardName: 'Animar', colors: noColor }).toString())).toEqual('https://api.magicthegathering.io/v1/cards?name=Animar');
  });
  it('returns a url with a format query', () => {
    expect(makeSearchUrl({ selectedFormat: 'khans of tarkir', colors: noColor }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?format=khans+of+tarkir');
  });
  it('returns a url with a set query', () => {
    expect(makeSearchUrl({ selectedSet: 'khans of tarkir', colors: noColor }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?sets=khans+of+tarkir');
  });
  it('returns a url with a card text query', () => {
    expect(makeSearchUrl({ cardText: 'destroy target creature', colors: noColor }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?text=destroy+target+creature');
  });
  it('returns a url with a card type query', () => {
    expect(makeSearchUrl({ selectedType: 'land', colors: noColor }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?types=land');
  });
  it('returns a url with a card subtype query', () => {
    expect(makeSearchUrl({ selectedSubtype: 'vampire', colors: noColor }).toString()).toEqual('https://api.magicthegathering.io/v1/cards?subtypes=vampire');
  });
  it('returns a url with all queries', () => {
    expect(decodeURIComponent(makeSearchUrl(allQuery).toString()))
      .toEqual('https://api.magicthegathering.io/v1/cards?name=progenitor+hydra&colors=black,white,red,green,blue&format=standard&sets=core+2010&text=protection+from+everything&types=creature&subtypes=hydra');
  });
});

describe('colorToString test', () => {

  it('returns a piped string on or exclusivity', () => {
    expect(colorsToString(allColorOr)).toEqual('black|white|red|green|blue');
  });
  it('returns a comma\'d string on and exclusivity', () => {
    expect(colorsToString(allColorAnd)).toEqual('black,white,red,green,blue');
  });
  it('excludes false colors', () => {
    expect(colorsToString(someColorsAnd)).toEqual('white,red,blue');
  });
  it('works with one color', () => {
    expect(colorsToString(oneColor)).toEqual('red');
  });
});
