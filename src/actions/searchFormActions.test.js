import { changeName, changeTypeLine, changeText } from './searchFormActions';

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
});
