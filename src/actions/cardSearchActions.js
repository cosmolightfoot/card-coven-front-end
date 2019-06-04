import { createAction } from 'promise-middleware-redux';
import fetchCards from '../services/fetchCards';

export const [
  newSearch,
  NEW_SEARCH,
  NEW_SEARCH_LOADING,
  NEW_SEARCH_FULFILLED,
  NEW_SEARCH_ERROR
] = createAction('NEW_SEARCH', fetchCards);
