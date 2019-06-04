import { createAction } from 'promise-middleware-redux';
import fetchCards from '../services/fetchCards';

// export const NEW_SEARCH_OPTIONS = 'NEW_SEARCH_OPTIONS';
// export const newSearch = (searchOptions) => (dispatch) => {
  
//   return fetchCards(searchOptions)
//     .then(results => {
//       console.log('RESULTS', results);
//       dispatch({
//         type: NEW_SEARCH_OPTIONS,
//         payload: {
//           searchOptions: searchOptions,
//           searchResults: results.cards
//         }
//       });
//     });
// };

export const [
  newSearch,
  NEW_SEARCH,
  NEW_SEARCH_LOADING,
  NEW_SEARCH_FULFILLED,
  NEW_SEARCH_ERROR
] = createAction('NEW_SEARCH', fetchCards);
