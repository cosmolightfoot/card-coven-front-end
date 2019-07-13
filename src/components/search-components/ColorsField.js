import React from 'react';
import PropTypes from 'prop-types';
import redMana from '../../assets/r-mana.svg';
import blueMana from '../../assets/u-mana.svg';
import greenMana from '../../assets/g-mana.svg';
import blackMana from '../../assets/b-mana.svg';
import whiteMana from '../../assets/w-mana.svg';

function ColorsField({ cardColors, exact, exclude, colorIdentity, handleCheckboxChange }) {
  const { red, blue, green, white, black } = cardColors;
  
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <img src={blueMana} style={{ width: '20px' }} />
        <img src={blackMana} style={{ width: '20px' }} />
        <img src={redMana} style={{ width: '20px' }} />
        <img src={whiteMana} style={{ width: '20px' }} />
        <img src={greenMana} style={{ width: '20px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <input type="checkbox" name="blue" value={blue} onChange={handleCheckboxChange} />
        <input type="checkbox" name="black" value={black} onChange={handleCheckboxChange} />
        <input type="checkbox" name="red" value={red} onChange={handleCheckboxChange} />
        <input type="checkbox" name="white" value={white} onChange={handleCheckboxChange} />
        <input type="checkbox" name="green" value={green} onChange={handleCheckboxChange} />
      </div>
      <div>
        <label>
          <input type="checkbox" name="exact" value={exact} onChange={handleCheckboxChange} />
          <span style={{ fontWeight: 'bold' }}>Match Colors Exactly</span>
        </label>
        <div>
          <label>
            <input type="checkbox" name="exclude" value={exclude} onChange={handleCheckboxChange} />
            <span style={{ fontWeight: 'bold' }}>Exclude Unselected Colors</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="colorIdentity" value={colorIdentity} onChange={handleCheckboxChange} />
            <span style={{ fontWeight: 'bold' }}>Search by Color Identity</span>
          </label>
        </div>
      </div>
    </main>
  );
}

ColorsField.propTypes = {
  cardColors: PropTypes.shape({
    black: PropTypes.bool.isRequired,
    white: PropTypes.bool.isRequired,
    green: PropTypes.bool.isRequired,
    red: PropTypes.bool.isRequired,
    blue: PropTypes.bool.isRequired,
  }).isRequired,
  exclude: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  colorIdentity: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};

export default ColorsField;
