import searchFormReducer from './searchFormReducer';
import { changeName, changeTypeLine, changeText, checkBlack } from '../actions/searchFormActions';

describe('search form reducer tests', () => {
  it('changes name value when reducer is called', () => {
    const state = {
      cardName: 'Animar'
    };
    expect(searchFormReducer(state, changeName('Bloodline Keeper'))).toEqual({
      cardName: 'Bloodline Keeper'
    });
  });
  it('changes name value when reducer is called', () => {
    const state = {
      typeLine: 'Vampire'
    };
    expect(searchFormReducer(state, changeTypeLine('Elemental'))).toEqual({
      typeLine: 'Elemental'
    });
  });
  it('changes text value when reducer is called', () => {
    const state = {
      cardText: 'destroy'
    };
    expect(searchFormReducer(state, changeText('draw card'))).toEqual({
      cardText: 'draw card'
    });
  });
  it('changes black value when reducer is called', () => {
    const state = {
      cardText: 'destroy'
    };
    expect(searchFormReducer(state, changeText('draw card'))).toEqual({
      cardText: 'draw card'
    });
  });
  it('changes black value when reducer is called', () => {
    const state = {
      black: false
    };
    expect(searchFormReducer(state, checkBlack())).toEqual({
      black: true
    });
  });
});
