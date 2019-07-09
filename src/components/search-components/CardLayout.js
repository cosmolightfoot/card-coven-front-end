import React from 'react';
import PropTypes from 'prop-types';

function CardLayout({ availLayouts, layout, handleChange }) {
  const layoutsList = availLayouts.map((cardLayout, i) => (
    <option key={i} value={cardLayout}>{cardLayout}</option>
  ));
  return (
    <section style={{ backgroundColor: 'pink', padding: '5px' }}>
      <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
        <div style={{ width: '7px', height: '7px', backgroundColor: 'red', flexGrow: 0, marginRight: '5px' }}></div>
        <h3>Layout:</h3>
      </header>
      <main>
        <select name="layout" onChange={handleChange} value={layout}>
          <option value="">--Filter By Layout--</option>
          {layoutsList}
        </select>
      </main>
    </section>
  );
}

CardLayout.propTypes = {
  availLayouts: PropTypes.array.isRequired,
  layout: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardLayout;
