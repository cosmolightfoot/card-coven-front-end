import React from 'react';
import PropTypes from 'prop-types';

function CardFormats({ formats, selectedFormat, handleChange, handleFormatPush, handleFormatDelete, availGameFormats }) {
  const formatsList = availGameFormats.map((format, i) => (
    <option key={i} value={format}>{format}</option>
  ));
  
  return (
    <section style={{ backgroundColor: 'pink', padding: '5px' }}>
      <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ width: '7px', height: '7px', backgroundColor: 'red', flexGrow: 0, marginRight: '5px' }}></div>
        <h3>Formats:</h3>
      </header>
      <main>
        <select value={selectedFormat} name="selectedFormat" onChange={handleChange}>
          <option value="">--Filter By Format--</option>
          {formatsList}
        </select>
        <button name="formats" onClick={handleFormatPush}>Add Format</button>
      </main>
    </section>
  );
}

CardFormats.propTypes = {
  formats: PropTypes.array.isRequired,
  selectedFormat: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFormatPush: PropTypes.func.isRequired,
  handleFormatDelete: PropTypes.func.isRequired,
  availGameFormats: PropTypes.array.isRequired
};

export default CardFormats;
