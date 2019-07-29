import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { CardGallery } from '../../styled-components/card-styles';
import TransformCard from './TransformCard';

function Cards({ cards }) {
  const cardsList = cards.map((card) => {
    if(card.layout === 'transform') return <TransformCard key={card._id} card={card} />; 
    else return <Card key={card._id} card={card} />;
  });
  return (
    <CardGallery>
      {cardsList}
    </CardGallery>
  );
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;
