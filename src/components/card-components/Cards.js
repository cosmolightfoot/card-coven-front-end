import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function Cards({ cards }) {
  const cardsList = cards.map(card => (<Card key="card._id" card={card} />));
  return (
    <ul>
      {cardsList}
    </ul>
  );
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;
