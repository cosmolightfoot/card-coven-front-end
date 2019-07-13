import React from 'react';
import PropTypes from 'prop-types';

function CardName({ typeLine, handleChange }) {
  return (
    <main>
      <input value={typeLine} name="typeLine" onChange={handleChange} style={{ marginLeft: '12px', width: '50%', height: '1.5em' }} placeholder="Search by Card Type or Subtype" ></input>
    </main>
  );
}

CardName.propTypes = {
  typeLine: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardName;
