import { changeName, changeTypeLine, changeText, checkBlack, checkWhite, checkRed } from './searchFormActions';

describe('search form actions tests', () => {
  it('returns name change payload', () => {
    expect(changeName('test')).toEqual({
      type: 'CHANGE_NAME_VAL',
      payload: 'test'
    });
  });
  it('returns type change payload', () => {
    expect(changeTypeLine('test')).toEqual({
      type: 'CHANGE_TYPE_VAL',
      payload: 'test'
    });
  });
  it('returns text change payload', () => {
    expect(changeText('test')).toEqual({
      type: 'CHANGE_TEXT_VAL',
      payload: 'test'
    });
  });
  it('returns black checkbox payload', () => {
    expect(checkBlack()).toEqual({
      type: 'CHECK_BLACK_MANA',
    });
  });
  it('returns white checkbox payload', () => {
    expect(checkWhite()).toEqual({
      type: 'CHECK_WHITE_MANA',
    });
  });
  it('returns red checkbox payload', () => {
    expect(checkRed()).toEqual({
      type: 'CHECK_RED_MANA',
    });
  });
});
