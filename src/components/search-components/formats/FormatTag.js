import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';
import { FormTag } from '../../../styled-components/search-form';

function Tag({ handleDelete, option }) {
  return (
    <FormTag width={`${option.length * 11}px`}>
      <h5>{option}</h5>
      <FaWindowClose size="15" onClick={() => handleDelete(option)} />
    </FormTag>
  );
}

Tag.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired
};

export default Tag;
