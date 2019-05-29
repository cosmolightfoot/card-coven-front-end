import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import SearchForm from './SearchForm';

function SearchCards({ onSubmit, state }) {
  
}

SearchCards.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};  

export default SearchCards;
