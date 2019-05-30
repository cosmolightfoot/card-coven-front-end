import { makeSearchUrl, colorsToString } from './makeSearchUrl';
import initialSearchState from '../../data/initialSearchState';

describe('make search url test', () => {
  it('returns a basic card search url on default submission', () => {
    expect(makeSearchUrl(initialSearchState).toString()).toEqual('https://api.magicthegathering.io/v1/cards');
  });
});

describe('colorToString test', () => {
  const allColorOr = {
    black: true
  }
  it('returns a piped string on or exclusivity', () => {
    expect(colorsToString())
  });
});
