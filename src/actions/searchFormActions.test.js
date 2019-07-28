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
  initAvailFormats,
  selectFormat,
  pushFormat,
  removeAvailFormat,
  removeCardFormat,
  pushAvailFormat,
  initAvailSets,
  selectCardSet,
  pushCardSet,
  removeAvailSet
} from './searchFormActions';
import { CHECK_EXACT_COLORS, CHECK_EXCLUDE_COLORS, SELECT_CARD_FORMAT, PUSH_CARD_FORMAT, INIT_AVAIL_FORMATS, REMOVE_AVAIL_FORMAT, REMOVE_CARD_FORMAT, PUSH_AVAIL_FORMAT, INIT_AVAIL_SETS, SELECT_CARD_SET, PUSH_CARD_SET, REMOVE_AVAIL_SET } from '../types/searchFormTypes';
  
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
  it('returns init avail format payload', () => {
    expect(initAvailFormats(['test'])).toEqual({
      type: INIT_AVAIL_FORMATS,
      payload: ['test']
    });
  });
  it('returns select format payload', () => {
    expect(selectFormat('test')).toEqual({
      type: SELECT_CARD_FORMAT,
      payload: 'test'
    });
  });
  it('returns push format payload', () => {
    expect(pushFormat()).toEqual({
      type: PUSH_CARD_FORMAT,
    });
  });
  it('returns remove avail format payload', () => {
    expect(removeAvailFormat()).toEqual({
      type: REMOVE_AVAIL_FORMAT
    });
  });
  it('returns remove card format payload', () => {
    expect(removeCardFormat('test')).toEqual({
      type: REMOVE_CARD_FORMAT,
      payload: 'test'
    });
  });
  it('returns push avail format payload', () => {
    expect(pushAvailFormat('test')).toEqual({
      type: PUSH_AVAIL_FORMAT,
      payload: 'test'
    });
  });
  it('initializes avail sets', () => {
    expect(initAvailSets(['test'])).toEqual({
      type: INIT_AVAIL_SETS,
      payload: ['test']
    });
  });
  it('select set action', () => {
    expect(selectCardSet('test')).toEqual({
      type: SELECT_CARD_SET,
      payload: 'test'
    });
  });
  it('push set action', () => {
    expect(pushCardSet()).toEqual({
      type: PUSH_CARD_SET,
    });
  });
  it('remove avail set action', () => {
    expect(removeAvailSet()).toEqual({
      type: REMOVE_AVAIL_SET
    });
  });
});
