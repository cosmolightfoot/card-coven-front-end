import React from 'react';
import PropTypes from 'prop-types';

function CardText({ cardText, handleChange }) {
  return (
    <section style={{ backgroundColor: 'oldlace', padding: '5px' }}>
      <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ width: '7px', height: '7px', backgroundColor: 'red', flexGrow: 0, marginRight: '5px' }}></div>
        <h3>Text:</h3>
      </header>
      <main>
        <input value={cardText} name="cardText" onChange={handleChange} style={{ marginLeft: '12px', width: '50%', height: '1.5em' }} placeholder="Search By Card Text"/>
      </main>
    </section>
  );
}


CardText.propTypes = {
  cardText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardText;
