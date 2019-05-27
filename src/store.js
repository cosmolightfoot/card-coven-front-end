import { createStore } from 'redux';
import reducers from './reducers/index';

const preloadedState = {
  searches: {
    currentSearchOptions: {},
    recentSearchOptions: [],
    currentSearchResults: [],
    cardsOfInterest: []
  }
};

export default createStore(
  reducers, preloadedState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
