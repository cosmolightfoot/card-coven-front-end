import React from 'react';
import PropTypes from 'prop-types';

function CardText({ cardText, handleChange }) {
  return (
    <main>
      <input value={cardText} name="cardText" onChange={handleChange} style={{ marginLeft: '12px', width: '50%', height: '1.5em' }} placeholder="Search By Card Text"/>
    </main>
  );
}


CardText.propTypes = {
  cardText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardText;
