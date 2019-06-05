import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
// import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { promiseMiddleware } from 'promise-middleware-redux';

const preloadedState = {
  searches: {
    currentSearchOptions: {},
    recentSearchOptions: [],
    currentSearchResults: [],
    cardsOfInterest: [],
    currentPage: 1,
    totalPages: 1,
    noSearches: true,
    loading: false,
    fulfilled: false
  }
};

export default createStore(
  reducers, preloadedState, 
  compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
