import { createAction } from 'promise-middleware-redux';
import fetchCards from '../services/fetchCards';
import { SELECT_CARD_DETAIL } from '../types/card-search-types';

export const [
  newSearch,
  NEW_SEARCH,
  NEW_SEARCH_LOADING,
  NEW_SEARCH_FULFILLED,
  NEW_SEARCH_ERROR
] = createAction('NEW_SEARCH', fetchCards);

export const selectCardDetail = card => ({
  type: SELECT_CARD_DETAIL,
  payload: card
});
