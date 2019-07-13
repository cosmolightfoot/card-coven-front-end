import React from 'react';
import PropTypes from 'prop-types';

function CardLayout({ availLayouts, layout, handleChange }) {
  const layoutsList = availLayouts.map((cardLayout, i) => (
    <option key={i} value={cardLayout}>{cardLayout}</option>
  ));
  return (
    <main>
      <select name="layout" onChange={handleChange} value={layout}>
        <option value="">--Filter By Layout--</option>
        {layoutsList}
      </select>
    </main>
  );
}

CardLayout.propTypes = {
  availLayouts: PropTypes.array.isRequired,
  layout: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CardLayout;
