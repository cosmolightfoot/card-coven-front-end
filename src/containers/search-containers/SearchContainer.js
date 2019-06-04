import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cards from '../../components/search-components/Cards';
import { getSearchResults, getSearchCurrentPage, getSearchTotalPages, getSearchLoading, getSearchFulfilled, getSearchNoSearches } from '../../selectors/searchSelectors';

class SearchContainer extends PureComponent {
  static propTypes = {
    searchResults: PropTypes.array,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    fulfilled: PropTypes.bool.isRequired,
    noSearches: PropTypes.bool.isRequired
  }

  render() {
    const { searchResults, noSearches } = this.props;
    return (
      <main>
        <SearchForm />
        <Cards cardListData={searchResults} noSearches={noSearches}  />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: getSearchResults(state),
  currentPage: getSearchCurrentPage(state),
  totalPages: getSearchTotalPages(state),
  loading: getSearchLoading(state),
  fulfilled: getSearchFulfilled(state),
  noSearches: getSearchNoSearches(state)
});

export default connect(
  mapStateToProps
)(SearchContainer);

