export const NEW_SEARCH_OPTIONS = 'NEW_SEARCH_OPTIONS';
import fetchCards from '../services/fetchCards';

export const newSearch = (searchOptions) => (dispatch) => {
  
  return fetchCards(searchOptions)
    .then(body => body.json())
    .then(cards => {
      console.log('IT FUCKING WORKED');
      dispatch({
        type: NEW_SEARCH_OPTIONS,
        payload: {
          searchOptions: searchOptions,
          searchResults: cards.cards
        }
      });
    });
};
