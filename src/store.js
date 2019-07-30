import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import reducers from './reducers/index';
import { promiseMiddleware } from 'promise-middleware-redux';

const preloadedState = {
  searches: {
    currentSearchOptions: {},
    recentSearchOptions: [],
    results: [],
    currentPage: 0,
    totalCount: 0,
    totalPages: 1,
    noSearches: true,
    loading: false,
    fulfilled: false,
    perPage: 50,
    hasResults: false,
    displaying: '0-0',
    hasMore: false,
    hasLess: false
  }
};


export default createStore(
  reducers, preloadedState, 
  compose(applyMiddleware(promiseMiddleware))
);

// export default createStore(
//   reducers, preloadedState, 
//   compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );
