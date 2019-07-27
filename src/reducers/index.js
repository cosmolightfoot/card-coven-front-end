import { combineReducers } from 'redux';
import searches from './searchReducer';
import searchForm from './searchFormReducer';

export default combineReducers({
  searches,
  searchForm
});

