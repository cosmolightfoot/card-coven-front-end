import React from 'react';
import PropTypes from 'prop-types';

function CardColors({ cardColors, handleChange, handleCheckboxChange, exclusivity }) {
  const { black, red, green, blue, white } = cardColors;

  return (
    <fieldset>
      <label>White<input type="checkbox" name="white" checked={white} onChange={handleCheckboxChange} /></label>
      <label>Blue<input type="checkbox" name="blue" checked={blue} onChange={handleCheckboxChange} /></label>
      <label>Green<input type="checkbox" name="green" checked={green} onChange={handleCheckboxChange} /></label>
      <label>Red<input type="checkbox" name="red" checked={red} onChange={handleCheckboxChange} /></label>
      <label>Black<input type="checkbox" name="black" checked={black} onChange={handleCheckboxChange} /></label>
      <select value={exclusivity} name="exclusivity" onChange={handleChange}>
        <option value={'and'}>And</option>
        <option value={'or'}>Or</option>
      </select>
    </fieldset>
  );
}

CardColors.propTypes = {
  cardColors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  exclusivity: PropTypes.string.isRequired
};

export default CardColors;
