import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cards from '../../components/card-components/Cards';
import { getSearchResults, getSearchCurrentPage, getSearchTotalPages, getSearchLoading, getSearchFulfilled, getSearchNoSearches, getSearchPerPage, getSearchHasResults, getSearchDisplaying, getSearchHasMore, getSearchHasLess, getSearchTotalCount, getCurrentSearchOptions } from '../../selectors/searchSelectors';
import { SearchMain, FormWrapper } from '../../styled-components/search-form-styles';
import { GalleryWrapper } from '../../styled-components/card-styles';
import { PagingNav, PagingButton, DisplayP } from '../../styled-components/paging-styles';
import { newSearch } from '../../actions/cardSearchActions';
import { log } from 'util';

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
    noSearches: PropTypes.bool.isRequired,
    pageSearch: PropTypes.func.isRequired,
    currentSearchOptions: PropTypes.object.isRequired
  }

  paging = page => {
    console.log(page);
    this.props.pageSearch({ ...this.props.currentSearchOptions, page });
  }

  componentDidUpdate() {
    console.log(typeof this.props.currentPage);
  }

  render() {
    const { results, displaying, noSearches, totalCount, hasResults, hasLess, hasMore } = this.props;
    return (
      <SearchMain>
        <FormWrapper>
          <SearchForm />
        </FormWrapper>
        { !noSearches ? 
          <PagingNav>
            { hasResults && hasLess ? <PagingButton onClick={() => this.paging((parseInt(this.props.currentPage)) - 1)}>&#60;</PagingButton> : null }
            <DisplayP>
              { 
                hasResults ? `Displaying ${displaying} of ${totalCount} results`
                  : 'Your Search Returned No Results' 
              }
            </DisplayP>
            { hasResults && hasMore ? <PagingButton onClick={() => this.paging((parseInt(this.props.currentPage)) + 1)}>&#62;</PagingButton> : null }
          </PagingNav> : null}
        { hasResults ? <Cards cards={results} /> : []}
      </SearchMain>
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
  noSearches: getSearchNoSearches(state),
  currentSearchOptions: getCurrentSearchOptions(state)
});

const mapDispatchToProps = dispatch => ({
  pageSearch(searchOptions) {
    dispatch(newSearch(searchOptions));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);

