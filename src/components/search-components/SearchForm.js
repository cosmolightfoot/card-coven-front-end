import React from 'react';
import PropTypes from 'prop-types';
import CardName from './CardName.js';

function SearchForm({ searchState, handleChange }) {
  const { cardName } = searchState;
  
  return (
    <form>
      <CardName cardName={cardName} handleChange={handleChange} />
    </form>
  );
  
}

SearchForm.propTypes = {
  searchState: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchForm;
