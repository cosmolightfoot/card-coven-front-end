import { SIMPLE_BLACK_MANA, SIMPLE_BLUE_MANA, SIMPLE_GREEN_MANA, SIMPLE_RED_MANA, SIMPLE_WHITE_MANA, SIMPLE_NAME_VAL, SIMPLE_RESET } from "../types/simple-search-types";

export function simpleBlackMana() {
  return {
    type: SIMPLE_BLACK_MANA
  }; 
}
export function simpleBlueMana() {
  return {
    type: SIMPLE_BLUE_MANA
  }; 
}
export function simpleGreenMana() {
  return {
    type: SIMPLE_GREEN_MANA
  }; 
}
export function simpleRedMana() {
  return {
    type: SIMPLE_RED_MANA
  }; 
}
export function simpleWhiteMana() {
  return {
    type: SIMPLE_WHITE_MANA
  }; 
}

export function changeTextField(text) {
  return {
    type: SIMPLE_NAME_VAL,
    payload: text
  };
}

export function resetSimpleForm() {
  return {
    type: SIMPLE_RESET
  }; 
}
