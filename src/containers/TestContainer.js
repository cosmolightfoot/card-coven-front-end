import { connect } from 'react-redux';
import { newSearch } from '../actions/cardSearchActions';
import SearchForm from '../components/search-components/SearchForm';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(searchOptions) {
    console.log(searchOptions);
    dispatch(newSearch(searchOptions));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);

