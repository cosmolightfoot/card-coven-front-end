import { createAction } from 'promise-middleware-redux';
import fetchSetNames from '../services/fetchSetNames';

export const [
  retrieveSetNames,
  FETCH_SET_NAMES,
  FETCH_SET_NAMES_LOADING,
  FETCH_SET_NAMES_FULFILLED,
  FETCH_SET_NAMES_ERROR
] = createAction('FETCH_SET_NAMES', fetchSetNames);
