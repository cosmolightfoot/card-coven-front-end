import React from 'react';
import PropTypes from 'prop-types';

function GameFormats({ gameFormats, handleCheckboxChange }) {
  const { commander, modern, vintage, duel, penny, standard } = gameFormats;

  return (
    <fieldset>
      <label>Commander<input type="checkbox" name="commander" checked={commander} onChange={handleCheckboxChange} /></label>
      <label>Standard<input type="checkbox" name="standard" checked={standard} onChange={handleCheckboxChange} /></label>
      <label>Modern<input type="checkbox" name="modern" checked={modern} onChange={handleCheckboxChange} /></label>
      <label>Vintage<input type="checkbox" name="vintage" checked={vintage} onChange={handleCheckboxChange} /></label>
      <label>Duel<input type="checkbox" name="duel" checked={duel} onChange={handleCheckboxChange} /></label>
      <label>Penny<input type="checkbox" name="penny" checked={penny} onChange={handleCheckboxChange} /></label>
    </fieldset>
  );
}

GameFormats.propTypes = {
  gameFormats: PropTypes.shape({
    commander: PropTypes.bool.isRequired,
    modern: PropTypes.bool.isRequired,
    vintage: PropTypes.bool.isRequired,
    duel: PropTypes.bool.isRequired,
    penny: PropTypes.bool.isRequired,
    standard: PropTypes.bool.isRequired
  }).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};

export default GameFormats;
