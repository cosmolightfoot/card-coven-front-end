import React from 'react';
import PropTypes from 'prop-types';

function GameFormats({ availGameFormats, selectedFormat, handleChange }) {
  const formatsList = availGameFormats.map(format => {
    return (<option key={format} value={format}>{format}</option>);
  });

  return (
    <select name="selectedFormat" value={selectedFormat} onChange={handleChange}>
      <option value="$DEFAULT$">--Filter by Game Format--</option>
      {formatsList}
    </select>
  );
}

GameFormats.propTypes = {
  availGameFormats: PropTypes.array.isRequired,
  selectedFormat: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default GameFormats;
