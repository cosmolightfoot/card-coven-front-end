import React from 'react';
import PropTypes from 'prop-types';

function CardText({ cardText, handleChange }) {
  return (
    <textarea
      value={cardText}
      name="cardText"
      placeholder="Search for a card by its text"
      onChange={handleChange}
    />
  );
}

CardText.propTypes = {
  cardText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardText;
