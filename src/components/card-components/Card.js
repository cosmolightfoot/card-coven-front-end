import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardWrapper, CardImg, CardTitle } from '../../styled-components/card-styles';

function Card({ card }) {
  return (
    <CardWrapper style={{ listStyleType: 'none' }}>
      <CardTitle>{card.name}</CardTitle>
      <Link to={`/${card.id}`}>
        <CardImg src={ card.image_uris.normal } />
      </Link>
    </CardWrapper>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;
