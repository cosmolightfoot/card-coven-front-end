import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
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
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
