import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cards from '../../components/search-components/Cards';

class SearchContainer extends PureComponent {
  static propTypes = {
    searchResults: PropTypes.array,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    fulfilled: PropTypes.bool.isRequired
  }

  render() {
    return (
      <main>
        <Cards cardListData={this.props.searchResults} />
        <SearchForm />
      </main>
    );
  }
}

const mapStateToProps = 

export default connect(

)

