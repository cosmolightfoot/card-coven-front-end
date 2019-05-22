import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

function Cards({ cardListData }) {
  const cardList = cardListData
  //filters out cards with no image
    .filter(card => {
      return card.imageUrl;
    })
  //maps to Card component
    .map(card => {
      return <Card key={card.multiverseId} cardData={card} />;
    });

  return (
    <ul>
      {cardList}
    </ul>
  );
}

Cards.propTypes = {
  cardListData: PropTypes.array.isRequired
};

export default Cards;
