import searchFormReducer from './searchFormReducer';
import { changeName } from '../actions/searchFormActions';

describe('search form reducer tests', () => {
  it('changes name value when reducer is called', () => {
    const state = {
      cardName: 'Animar'
    };
    expect(searchFormReducer(state, changeName('Bloodline Keeper'))).toEqual({
      cardName: 'Bloodline Keeper'
    });
  });
});
