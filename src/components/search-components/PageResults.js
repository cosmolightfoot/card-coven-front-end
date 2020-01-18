import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { newSearch, newSimpleSearch } from '../../actions/cardSearchActions';

function PageResults({ mostRecentSearch, currentPage, totalPages, displaying, hasMore, hasLess }) {
  return (
    <nav>

    </nav>
  );
}

PageResults.propTypes = {
  mostRecentSearch: PropTypes.shape({
    searchOptions: PropTypes.object,
    searchTypes: PropTypes.string
  }),
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  displaying: PropTypes.string.isRequired,
  hasMore: PropTypes.bool.isRequired,
  hasLess: PropTypes.bool.isRequired,
  pageSearch()
};

const mapStateToProps = state => ({
  mostRecentSearch: [][state.length],
  currentPage: null,
  totalPages: null,
  displaying: null,
  hasMore: null,
  hasLess: null
});

const mapDispatchToProps = dispatch => ({
  pageSearch(searchOptions, searchType) {
    if (searchType === 'advanced') dispatch(newSearch(searchOptions));
    if (searchType === 'simple') dispatch(newSimpleSearch(searchOptions));
  }
})



component.propTypes = {
  props: PropTypes.type.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PageResults);
