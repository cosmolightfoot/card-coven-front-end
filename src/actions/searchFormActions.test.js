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
  initAvailSort,
  selectSortFilter,
  selectSortDirection,
  pushSortFilter,
  removeAvailSortFilter,
  removeSortFilter,
  pushAvailSortFilter,
  updateSelectedSets,
  updateSelectedFormats
} from './searchFormActions';
import { CHECK_EXACT_COLORS, CHECK_EXCLUDE_COLORS, SELECT_CARD_FORMAT, PUSH_CARD_FORMAT, INIT_AVAIL_FORMATS, REMOVE_AVAIL_FORMAT, REMOVE_CARD_FORMAT, PUSH_AVAIL_FORMAT, INIT_AVAIL_SETS, SELECT_CARD_SET, PUSH_CARD_SET, REMOVE_AVAIL_SET, REMOVE_CARD_SET, PUSH_AVAIL_SET, INIT_AVAIL_SORT, SELECT_SORT_FILTER, SELECT_SORT_DIRECTION, PUSH_SORT_FILTER, REMOVE_AVAIL_SORT, REMOVE_SORT_FILTER, PUSH_AVAIL_SORT, UPDATE_SELECTED_SETS, UPDATE_SELECTED_FORMATS } from '../types/search-form-types';

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
  // it('returns init avail format payload', () => {
  //   expect(initAvailFormats(['test'])).toEqual({
  //     type: INIT_AVAIL_FORMATS,
  //     payload: ['test']
  //   });
  // });
  // it('returns select format payload', () => {
  //   expect(selectFormat('test')).toEqual({
  //     type: SELECT_CARD_FORMAT,
  //     payload: 'test'
  //   });
  // });
  // it('returns push format payload', () => {
  //   expect(pushFormat()).toEqual({
  //     type: PUSH_CARD_FORMAT,
  //   });
  // });
  // it('returns remove avail format payload', () => {
  //   expect(removeAvailFormat()).toEqual({
  //     type: REMOVE_AVAIL_FORMAT
  //   });
  // });
  // it('returns remove card format payload', () => {
  //   expect(removeCardFormat('test')).toEqual({
  //     type: REMOVE_CARD_FORMAT,
  //     payload: 'test'
  //   });
  // });
  // it('returns push avail format payload', () => {
  //   expect(pushAvailFormat('test')).toEqual({
  //     type: PUSH_AVAIL_FORMAT,
  //     payload: 'test'
  //   });
  // });
  // it('init avail sort action', () => {
  //   expect(initAvailSort(['test'])).toEqual({
  //     type: INIT_AVAIL_SORT,
  //     payload: ['test']
  //   });
  // });
  // it('select sort filter action', () => {
  //   expect(selectSortFilter('test')).toEqual({
  //     type: SELECT_SORT_FILTER,
  //     payload: 'test'
  //   });
  // });
  // it('select sort direction action', () => {
  //   expect(selectSortDirection('1')).toEqual({
  //     type: SELECT_SORT_DIRECTION,
  //     payload: '1'
  //   });
  // });
  // it('push sort filter action', () => {
  //   expect(pushSortFilter()).toEqual({
  //     type: PUSH_SORT_FILTER
  //   });
  // });
  // it('remove avail sort action', () => {
  //   expect(removeAvailSortFilter()).toEqual({
  //     type: REMOVE_AVAIL_SORT
  //   });
  // });
  // it('remove sort filter action', () => {
  //   expect(removeSortFilter('filter')).toEqual({
  //     type: REMOVE_SORT_FILTER,
  //     payload: 'filter'
  //   });
  // });
  // it('push avail sort action', () => {
  //   expect(pushAvailSortFilter('filter')).toEqual({
  //     type: PUSH_AVAIL_SORT,
  //     payload: 'filter'
  //   });
  // });
  it('update selected sets action', () => {
    expect(updateSelectedSets(['1', '2'])).toEqual({ 
      type: UPDATE_SELECTED_SETS, 
      payload: ['1', '2'] 
    });
  });
  it('update selected formats action', () => {
    expect(updateSelectedFormats(['1', '2'])).toEqual({
      type: UPDATE_SELECTED_FORMATS,
      payload: ['1', '2']
    });
  });
});
