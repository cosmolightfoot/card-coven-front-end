import fetchCards from '../services/fetchCards';
import { 
  SELECT_CARD_DETAIL, 
  NEW_SEARCH, 
  NEW_SEARCH_LOADING, 
  NEW_SEARCH_ERROR, 
  NEW_SIMPLE_SEARCH, 
  NEW_SIMPLE_SEARCH_LOADING, 
  NEW_SIMPLE_SEARCH_ERROR 
} from '../types/card-search-types';
import simpleFetchCards from '../services/simpleFetchCards';

export const newAdvancedSearch = searchOptions => dispatch => {
  dispatch({
    type: NEW_SEARCH_LOADING
  });

  return fetchCards(searchOptions)
    .then(results => {
      dispatch({
        type: NEW_SEARCH,
        payload: results
      });
    })
    .catch(error => {
      dispatch({
        type: NEW_SEARCH_ERROR,
        payload: error
      });
    });
};

export const newSimpleSearch = searchOptions => dispatch => {
  dispatch({
    type: NEW_SIMPLE_SEARCH_LOADING
  });

  return simpleFetchCards(searchOptions)
    .then(results => {
      dispatch({
        type: NEW_SIMPLE_SEARCH,
        payload: results
      });
    })
    .catch(error => {
      dispatch({
        type: NEW_SIMPLE_SEARCH_ERROR,
        payload: error
      });
    });
};  

export const selectCardDetail = card => ({
  type: SELECT_CARD_DETAIL,
  payload: card
});
