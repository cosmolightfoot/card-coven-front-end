import assortedDataReducer from './assortedDataReducer';
import { RETRIEVE_SET_NAMES } from '../types/assorted-data-types';

const initState = {
  setNames: []
};


describe('Assorted data reducer tests', () => {
  it('adds set data to state', () => {
    expect(assortedDataReducer(initState, { type: RETRIEVE_SET_NAMES, payload: ['set1', 'set2', 'set3'] })).toEqual({
      setNames: ['set1', 'set2', 'set3']
    });
  });
});
