export const NEW_SEARCH_OPTIONS = 'NEW_SEARCH_OPTIONS';
import fetchCards from '../services/fetchCards';

export const newSearch = (searchOptions) => (dispatch) => {
  
  return fetchCards(searchOptions)
    .then(results => {
      console.log('RESULTS', results);
      dispatch({
        type: NEW_SEARCH_OPTIONS,
        payload: {
          searchOptions: searchOptions,
          searchResults: results.cards
        }
      });
    });
};
