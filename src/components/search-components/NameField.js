import React from 'react';
import PropTypes from 'prop-types';

function NameField({ cardName, handleChange }) {
  return (
    <main>
      <input value={cardName} placeholder="Search by Card Name" name="cardName" onChange={handleChange} style={{ marginLeft: '12px', width: '50%', height: '1.5em' }}></input>
    </main>
  );
}

NameField.propTypes = {
  cardName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default NameField;
