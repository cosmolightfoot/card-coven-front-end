import { makeSearchUrl } from './searchCards';
import initialSearchState from '../../data/initialSearchState';

describe('search cards fetch url builder tests', () => {
  it('returns a basic card search url on default submission', () => {
    expect(makeSearchUrl(initialSearchState)).toEqual('https://api.magicthegathering.io/v1/cards');
  });
});
