import React from 'react';
import PropTypes from 'prop-types';
import Creature from './Creature.js';
import Land from './Land';
import Sorceries from './Sorceries';

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
      if(card.types.includes('Land')) return <Land key={card.multiverseId} cardData={card} />;
      else if(card.types.includes('Creature')) return <Creature key={card.multiverseId} cardData={card} />;
      else return <Sorceries key={card.multiverseId} cardData={card} />;
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
