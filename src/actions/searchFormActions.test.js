import { changeName } from './searchFormActions';

describe('search form actions tests', () => {
  it('returns name change payload', () => {
    expect(changeName('test')).toEqual({
      type: 'CHANGE_NAME_VAL',
      payload: 'test'
    });
  });
});
