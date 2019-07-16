import React from 'react';
import PropTypes from 'prop-types';

function Card({ card }) {
  const { image_uris } = card;
  return (
    <li style={{ listStyleType: 'none' }}>
      <h1>{card.name}</h1>
      <img src={image_uris.large || image_uris.normal || image} />
    </li>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;
