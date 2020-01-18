import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const preloadedState = {
  searches: {
    // currentSearchOptions: {},
    // recentSearchOptions: [],
    currentSearch: {},
    recentSearches: [],
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


// export default createStore(
//   reducers, preloadedState, 
//   compose(applyMiddleware(promiseMiddleware))
// );

export default createStore(
  reducers, preloadedState,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
