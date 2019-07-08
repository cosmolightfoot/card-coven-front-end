import React from 'react';
import PropTypes from 'prop-types';

function CardName({ cardName, handleChange }) {
  return (
    <section style={{ backgroundColor: 'pink'}}>
      <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ width: '7px', height: '7px', backgroundColor: 'red', flexGrow: 0, marginRight: '5px' }}></div>
        <h3>Name:</h3>
      </header>
      <main>
        <input value={cardName} onChange={handleChange} style={{ marginLeft: '12px' }}></input>
      </main>
    </section>
  );
}

CardName.propTypes = {
  cardName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardName;
