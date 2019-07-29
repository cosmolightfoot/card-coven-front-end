import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cards from '../../components/card-components/Cards';
import { getSearchResults, getSearchCurrentPage, getSearchTotalPages, getSearchLoading, getSearchFulfilled, getSearchNoSearches, getSearchPerPage, getSearchHasResults, getSearchDisplaying, getSearchHasMore, getSearchHasLess, getSearchTotalCount } from '../../selectors/searchSelectors';

class SearchContainer extends PureComponent {
  static propTypes = {
    results: PropTypes.array,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    hasResults: PropTypes.bool.isRequired,
    displaying: PropTypes.string.isRequired,
    hasMore: PropTypes.bool.isRequired,
    hasLess: PropTypes.bool.isRequired,
    totalCount: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    fulfilled: PropTypes.bool.isRequired,
    noSearches: PropTypes.bool.isRequired
  }

  render() {
    const { results, noSearches, hasResults,  } = this.props;
    return (
      <main>
        <SearchForm />
        { hasResults ? <Cards cards={results} /> : []}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  results: getSearchResults(state),
  currentPage: getSearchCurrentPage(state),
  totalPages: getSearchTotalPages(state),
  perPage: getSearchPerPage(state),
  hasResults: getSearchHasResults(state),
  displaying: getSearchDisplaying(state),
  hasMore: getSearchHasMore(state),
  hasLess: getSearchHasLess(state),
  totalCount: getSearchTotalCount(state),
  loading: getSearchLoading(state),
  fulfilled: getSearchFulfilled(state),
  noSearches: getSearchNoSearches(state)
});

export default connect(
  mapStateToProps
)(SearchContainer);

