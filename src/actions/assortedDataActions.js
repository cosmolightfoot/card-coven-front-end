import { createAction } from 'promise-middleware-redux';
import fetchSetNames from '../services/fetchSetNames';

export const [
  retrieveSetNames,
  RETRIEVE_SET_NAMES,
  RETRIEVE_SET_NAMES_LOADING,
  RETRIEVE_SET_NAMES_FULFILLED,
  RETRIEVE_SET_NAMES_ERROR
] = createAction('RETRIEVE_SET_NAMES', fetchSetNames);
