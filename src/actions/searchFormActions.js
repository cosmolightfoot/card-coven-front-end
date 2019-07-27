import { 
  CHANGE_NAME_VAL,
  CHANGE_TYPE_VAL,
  CHANGE_TEXT_VAL,
  CHECK_BLACK_MANA,
  CHECK_WHITE_MANA
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

