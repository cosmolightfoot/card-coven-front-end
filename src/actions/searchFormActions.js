import { 
  CHANGE_NAME_VAL,
  CHANGE_TYPE_VAL,
  CHANGE_TEXT_VAL
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


