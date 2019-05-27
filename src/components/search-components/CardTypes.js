import React from 'react';
import PropTypes from 'prop-types';

function CardTypes({ selectedType, selectedSubtype, cardTypes, cardSubtypes, handleChange }) {
  const typesList = cardTypes.map(type => {
    return (<option key={type} value={type}>{type}</option>);
  });

  const subtypesList = cardSubtypes.map(subtype =>{ 
    return (<option key={subtype} value={subtype}>{subtype}</option>);
  });

  return (
    <section>
      <select name="selectedType" value={selectedType} onChange={handleChange}>
        <option value="$DEFAULT$">--Select a Card Type--</option>
        {typesList}
      </select>
      <select name="selectedSubtype" value={selectedSubtype} onChange={handleChange}>
        <option value="$DEFAULT$">--Select a Card Subtype--</option>
        {subtypesList}
      </select>
    </section>
  )
}

CardTypes.propTypes = {
  cardTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  cardSubtypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedType: PropTypes.string.isRequired,
  selectedSubtype: PropTypes.string.isRequired
};

export default CardTypes;
