import searchFormReducer from './searchFormReducer';
import { changeName, changeTypeLine, changeText, checkBlack, checkWhite } from '../actions/searchFormActions';

describe('search form reducer tests', () => {
  it('changes name value when action is called', () => {
    const state = {
      cardName: 'Animar'
    };
    expect(searchFormReducer(state, changeName('Bloodline Keeper'))).toEqual({
      cardName: 'Bloodline Keeper'
    });
  });
  it('changes name value when action is called', () => {
    const state = {
      typeLine: 'Vampire'
    };
    expect(searchFormReducer(state, changeTypeLine('Elemental'))).toEqual({
      typeLine: 'Elemental'
    });
  });
  it('changes text value when action is called', () => {
    const state = {
      cardText: 'destroy'
    };
    expect(searchFormReducer(state, changeText('draw card'))).toEqual({
      cardText: 'draw card'
    });
  });
  it('changes black value when action is called', () => {
    const state = {
      cardText: 'destroy'
    };
    expect(searchFormReducer(state, changeText('draw card'))).toEqual({
      cardText: 'draw card'
    });
  });
  it('changes black value when action reducer is called', () => {
    const state = {
      black: false
    };
    expect(searchFormReducer(state, checkBlack())).toEqual({
      black: true
    });
  });
  it('changes white value when action is called', () => {
    const state = {
      white: false
    };
    expect(searchFormReducer(state, checkWhite())).toEqual({
      white: true
    });
  });
});