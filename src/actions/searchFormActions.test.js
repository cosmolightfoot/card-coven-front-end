import { 
  changeName, 
  changeTypeLine, 
  changeText, 
  checkBlack, 
  checkWhite, 
  checkRed, 
  checkGreen,
  checkBlue,
  checkExact,
  checkExclude,
  selectFormat
} from './searchFormActions';
import { CHECK_EXACT_COLORS, CHECK_EXCLUDE_COLORS, SELECT_CARD_FORMAT } from '../types/searchFormTypes';
  
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
  it('returns black checkbox type', () => {
    expect(checkBlack()).toEqual({
      type: 'CHECK_BLACK_MANA',
    });
  });
  it('returns white checkbox type', () => {
    expect(checkWhite()).toEqual({
      type: 'CHECK_WHITE_MANA',
    });
  });
  it('returns red checkbox type', () => {
    expect(checkRed()).toEqual({
      type: 'CHECK_RED_MANA',
    });
  });
  it('returns green checkbox type', () => {
    expect(checkGreen()).toEqual({
      type: 'CHECK_GREEN_MANA',
    });
  });
  it('returns blue checkbox type', () => {
    expect(checkBlue()).toEqual({
      type: 'CHECK_BLUE_MANA',
    });
  });
  it('returns exact checkbox type', () => {
    expect(checkExact()).toEqual({
      type: CHECK_EXACT_COLORS
    });
  });
  it('returns exclude checkbox type', () => {
    expect(checkExclude()).toEqual({
      type: CHECK_EXCLUDE_COLORS
    });
  });
  it('returns select format payload', () => {
    expect(selectFormat()).toEqual({
      type: SELECT_CARD_FORMAT
    });
  });
});
