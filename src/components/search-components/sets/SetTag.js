import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';
import { FormTag } from '../../../styled-components/search-form-styles';

function SetTag({ handleDelete, option }) {
  return (
    <FormTag width={`${option.length * 10}px`}>
      <h5>{option}</h5>
      <FaWindowClose size="15" onClick={() => handleDelete(option)} />
    </FormTag>
  );
}

SetTag.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired
};

export default SetTag;
