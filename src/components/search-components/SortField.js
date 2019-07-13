import React from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare, FaWindowClose, FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

function CardSort({ sortFilters, sortDirection, selectedFilter, handleChange, handleSortPush, handleSortDelete, availSortFilters }) {
  const filtersList = availSortFilters.map((filter, i) => {
    const pattern = /(.*)\/(.*)/;
    const filterName = filter.replace(pattern, '$2');
    return (<option key={i} value={filter}>{filterName}</option>);
  }
  );
  const taggedFiltersList = sortFilters.map((filter, i) => {
    const pattern = /(.*)\/(.*)/;
    const filterName = filter.filter.replace(pattern, '$2');
    let direction = '';
    switch(filter.direction) {
      case '1': direction = <FaArrowCircleUp size="15" />;
        break;
      case '-1': direction = <FaArrowCircleDown size="15" />;
        break;
      default: direction = <FaArrowCircleUp size="15" />;
        break;
    }
    return (
      <li key={i} style={{ display: 'flex', listStyleType: 'none', alignItems: 'center', flexGrow: 0, width: '50px%', height: '20px', padding: '3px' }}>
        {direction}
        <h5>{filterName}</h5>
        <FaWindowClose size="15" onClick={() => handleSortDelete(filter)} />
      </li>
    );
  });
  
  return (
    <main>
      <ul style={{ width: '93%' }}>
        {taggedFiltersList}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <select value={selectedFilter} name="selectedFilter" onChange={handleChange}>
          <option value="">--Sort Results--</option>
          {filtersList}
        </select>
        <select value={sortDirection} name="sortDirection" onChange={handleChange}>
          <option value="1">Ascending</option>
          <option value="-1">Descending</option>
        </select>
        <FaPlusSquare name="sortFilters" size="23" onClick={handleSortPush} />
      </div>
    </main>
  );
}

CardSort.propTypes = {
  sortFilters: PropTypes.array.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSortPush: PropTypes.func.isRequired,
  handleSortDelete: PropTypes.func.isRequired,
  availSortFilters: PropTypes.array.isRequired
};

export default CardSort;
