import React from 'react';
import PropTypes from 'prop-types';
import SetTag from './SetTag';
import { TagList } from '../../../styled-components/search-form-styles'; 

function SetTags({ handleDelete, options }) {
  const tagsList = options.map((option, i) => {
    return <SetTag key={i} option={option} handleDelete={handleDelete} />;
  });
  return (
    <TagList height={'300px'}  >
      {tagsList}
    </TagList>
  );
}

SetTags.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SetTags;
