import React from 'react';
import PropTypes from 'prop-types';

function CardName({ cardName, handleChange }) {
  return (
    <div>
      <h3>Search By CardName: </h3>
      <input 
        type="text"
        name="cardName"
        placeholder="Search By Card Name"
        value={cardName}
        onChange={handleChange}
      />
    </div>
  );
}

CardName.propTypes = {
  cardName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardName;
