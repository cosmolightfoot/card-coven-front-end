import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import { TagList } from '../../styled-components/search-form';

function Tags({ handleDelete, options }) {
  const tagsList = options.map((option, i) => {
    return <Tag key={i} option={option} handleDelete={handleDelete} />;
  });
  return (
    <TagList>
      {tagsList}
    </TagList>
  );
}

Tags.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default Tags;
