import { makeSearchUrl, colorsToString } from './makeSearchUrl';
import initialSearchState from '../../data/initialSearchState';

describe('make search url test', () => {
  it('returns a basic card search url on default submission', () => {
    expect(makeSearchUrl(initialSearchState).toString()).toEqual('https://api.magicthegathering.io/v1/cards');
  });
});

describe('colorToString test', () => {
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
