import { CHANGE_NAME_VAL } from '../types/searchFormTypes';

export function changeName(text) {
  return {
    type: CHANGE_NAME_VAL,
    payload: text
  };
}
