import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

function Tags({ handleDelete, options }) {
  const tagsList = options.map((option, i) => {
    return <Tag key={i} option={option} handleDelete={handleDelete} />;
  });
  return (
    <ul>
      {tagsList}
    </ul>
  );
}

Tags.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default Tags;
