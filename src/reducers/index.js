import { combineReducers } from 'redux';
import searches from './searchReducer';
import searchForm from './searchFormReducer';
import drawers from './drawerReducer';
import simpleForm from './simpleFormReducer';

export default combineReducers({
  searches,
  searchForm,
  drawers,
  simpleForm
});

