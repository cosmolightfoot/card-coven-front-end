import React from 'react';
import PropTypes from 'prop-types';
import redMana from '../../assets/r-mana.svg';
import blueMana from '../../assets/u-mana.svg';
import greenMana from '../../assets/g-mana.svg';
import blackMana from '../../assets/b-mana.svg';
import whiteMana from '../../assets/w-mana.svg';

function CardColors({ colors, handleCheckboxChange, handleChange }) {
  return (
    <section>
      <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ width: '7px', height: '7px', backgroundColor: 'red', flexGrow: 0, marginRight: '5px' }}></div>
        <h3>Colors:</h3>
      </header>
      <main>
        <div>
          <img src={redMana} style={{ width: '20px' }} />
          <img src={blueMana} style={{ width: '20px' }} />
          <img src={greenMana} style={{ width: '20px' }} />
          <img src={blackMana} style={{ width: '20px' }} />
          <img src={whiteMana} style={{ width: '20px' }} />
        </div>
      </main>
    </section>
  );
}

CardColors.propTypes = {
  colors: PropTypes.shape({
    black: PropTypes.bool.isRequired,
    white: PropTypes.bool.isRequired,
    green: PropTypes.bool.isRequired,
    red: PropTypes.bool.isRequired,
    blue: PropTypes.bool.isRequired,
    exact: PropTypes.bool.isRequired,
    exclude: PropTypes.bool.isRequired,
    colorType: PropTypes.string.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default CardColors;
