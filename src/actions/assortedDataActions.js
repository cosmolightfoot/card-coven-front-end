import fetchSetNames from '../services/fetchSetNames';
import { 
  INITIALIZE_FORMATS, 
  RETRIEVE_SET_NAMES, 
  RETRIEVE_SET_NAMES_LOADING, 
  RETRIEVE_SET_NAMES_ERROR 
} from '../types/assorted-data-types';  

export const retrieveSetNames = () => dispatch => {
  dispatch({
    type: RETRIEVE_SET_NAMES_LOADING
  });

  return fetchSetNames()
    .then(setNames => {
      dispatch({
        type: RETRIEVE_SET_NAMES,
        payload: setNames
      });
    })
    .catch(error => {
      dispatch({
        type: RETRIEVE_SET_NAMES_ERROR,
        payload: error
      });
    });
};

export function initializeFormats(types) {
  return {
    type: INITIALIZE_FORMATS,
    payload: types
  };
}
