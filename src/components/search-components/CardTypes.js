import React from 'react';
import PropTypes from 'prop-types';

function CardName({ typeLine, handleChange }) {
  return (
    <section style={{ backgroundColor: 'rgb(200, 200, 255)', padding: '5px' }}>
      <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ width: '7px', height: '7px', backgroundColor: 'red', flexGrow: 0, marginRight: '5px' }}></div>
        <h3>Types:</h3>
      </header>
      <main>
        <input value={typeLine} name="typeLine" onChange={handleChange} style={{ marginLeft: '12px', width: '50%', height: '1.5em' }} placeholder="Search by Card Type or Subtype" ></input>
      </main>
    </section>
  );
}

CardName.propTypes = {
  typeLine: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardName;
