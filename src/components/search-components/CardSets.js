import React from 'react';
import PropTypes from 'prop-types';

function CardSets({ availSets, selectedSet, handleChange }) {
  const setList = availSets.map(set => {
    return (<option key={set.code} value={set.name}>{set.name}</option>);
  });

  return (
    <select name="selectedSet" value={selectedSet} onChange={handleChange}>
      <option value="$DEFAULT$" >--Filter By Set--</option>
      {setList}
    </select>
  );
}

CardSets.propTypes = {
  selectedSet: PropTypes.string.isRequired,
  availSets: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardSets;
