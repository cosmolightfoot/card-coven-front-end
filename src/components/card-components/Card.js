import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, CardImg, CardTitle } from '../../styled-components/card-styles';

function Card({ card }) {
  return (
    <CardWrapper style={{ listStyleType: 'none' }}>
      <CardTitle>{card.name}</CardTitle>
      <CardImg src={ card.image_uris.normal } />
    </CardWrapper>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;
