import { createAction } from 'promise-middleware-redux';
import fetchSetNames from '../services/fetchSetNames';
import { INITIALIZE_FORMATS } from '../types/assorted-data-types';

export const [
  retrieveSetNames,
  RETRIEVE_SET_NAMES,
  RETRIEVE_SET_NAMES_LOADING,
  RETRIEVE_SET_NAMES_FULFILLED,
  RETRIEVE_SET_NAMES_ERROR
] = createAction('RETRIEVE_SET_NAMES', fetchSetNames);

export function initializeFormats(types) {
  return {
    type: INITIALIZE_FORMATS,
    payload: types
  };
}
