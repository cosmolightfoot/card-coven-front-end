import { 
  CHANGE_NAME_VAL,
  CHANGE_TYPE_VAL,
  CHANGE_TEXT_VAL,
  CHECK_BLACK_MANA,
  CHECK_WHITE_MANA,
  CHECK_RED_MANA,
  CHECK_GREEN_MANA,
  CHECK_BLUE_MANA,
  CHECK_EXACT_COLORS,
  CHECK_EXCLUDE_COLORS,
  SELECT_CARD_FORMAT,
  PUSH_CARD_FORMAT,
  INIT_AVAIL_FORMATS,
  REMOVE_AVAIL_FORMAT,
  REMOVE_CARD_FORMAT,
  PUSH_AVAIL_FORMAT,
  INIT_AVAIL_SETS,
  SELECT_CARD_SET,
  PUSH_CARD_SET,
  REMOVE_CARD_SET,
  REMOVE_AVAIL_SET,
  PUSH_AVAIL_SET,
  INIT_AVAIL_SORT,
  SELECT_SORT_FILTER,
  SELECT_SORT_DIRECTION,
  PUSH_SORT_FILTER,
  REMOVE_AVAIL_SORT
} from '../types/searchFormTypes';

export function changeName(text) {
  return {
    type: CHANGE_NAME_VAL,
    payload: text
  };
}
export function changeTypeLine(text) {
  return {
    type: CHANGE_TYPE_VAL,
    payload: text
  };
}
export function changeText(text) {
  return {
    type: CHANGE_TEXT_VAL,
    payload: text
  };
}
export function checkBlack() {
  return {
    type: CHECK_BLACK_MANA
  };
}
export function checkWhite() {
  return {
    type: CHECK_WHITE_MANA
  };
}
export function checkRed() {
  return {
    type: CHECK_RED_MANA
  };
}
export function checkGreen() {
  return {
    type: CHECK_GREEN_MANA
  };
}
export function checkBlue() {
  return {
    type: CHECK_BLUE_MANA
  };
}
export function checkExact() {
  return {
    type: CHECK_EXACT_COLORS
  };
}
export function checkExclude() {
  return {
    type: CHECK_EXCLUDE_COLORS
  };
}
export function initAvailFormats(formats) {
  return {
    type: INIT_AVAIL_FORMATS,
    payload: formats
  };
}
export function selectFormat(format) {
  return {
    type: SELECT_CARD_FORMAT,
    payload: format
  };
}
export function pushFormat() {
  return {
    type: PUSH_CARD_FORMAT
  };
}
export function removeAvailFormat() {
  return {
    type: REMOVE_AVAIL_FORMAT
  };
}
export function removeCardFormat(format) {
  return {
    type: REMOVE_CARD_FORMAT,
    payload: format
  };
}
export function pushAvailFormat(format) {
  return {
    type: PUSH_AVAIL_FORMAT,
    payload: format
  };
}
export function initAvailSets(sets) {
  return {
    type: INIT_AVAIL_SETS,
    payload: sets
  };
}
export function selectCardSet(set) {
  return {
    type: SELECT_CARD_SET,
    payload: set
  };
}
export function pushCardSet() {
  return {
    type: PUSH_CARD_SET
  };
}
export function removeAvailSet() {
  return {
    type: REMOVE_AVAIL_SET
  };
}
export function removeCardSet(set) {
  return {
    type: REMOVE_CARD_SET,
    payload: set
  };
}
export function pushAvailSet(set) {
  return {
    type: PUSH_AVAIL_SET,
    payload: set
  };
}
export function initAvailSort(sortFilter) {
  return {
    type: INIT_AVAIL_SORT,
    payload: sortFilter
  };
}
export function selectSortFilter(sortFilter) {
  return {
    type: SELECT_SORT_FILTER,
    payload: sortFilter
  };
}
export function selectSortDirection(sortDirection) {
  return {
    type: SELECT_SORT_DIRECTION,
    payload: sortDirection
  };
}
export function pushSortFilter() {
  return {
    type: PUSH_SORT_FILTER
  };
}
export function removeAvailSortFilter() {
  return {
    type: REMOVE_AVAIL_SORT
  };
}


