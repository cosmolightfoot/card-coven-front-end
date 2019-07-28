import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

function Tag({ handleDelete, option, field }) {
  return (
    <li style={{ display: 'flex', listStyleType: 'none', alignItems: 'center', flexGrow: 0, width: '15%', height: '20px', padding: '3px' }}>
      <h5>{option}</h5>
      <FaWindowClose size="15" onClick={() => handleDelete(option)} />
    </li>
  );
}

Tag.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired
};

export default Tag;
