import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

function Cards({ cardListData, noSearches }) {
  if(noSearches) return null;
  if(cardListData === []) return <p>Your Search Returned No Results</p>;
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
  cardListData: PropTypes.array.isRequired,
  noSearches: PropTypes.bool.isRequired
};

export default Cards;
