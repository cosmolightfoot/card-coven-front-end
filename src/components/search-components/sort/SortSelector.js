import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare } from 'react-icons/fa';
import { connect } from 'react-redux';
import sortFilterData from '../../../data/sortData';
import { getAvailSortFilters, getSortDirection, getSelectedFilter } from '../../../selectors/searchFormSelectors';
import { initAvailSort, selectSortFilter, selectSortDirection, pushSortFilter, removeAvailSortFilter } from '../../../actions/searchFormActions';

class SortSelector extends PureComponent {
  static propTypes = {
    loadSortFilters: PropTypes.func.isRequired,
    availSortFilters: PropTypes.array.isRequired,
    selectedFilter: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handlePush: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadSortFilters(sortFilterData);
  }

  render() {
    const pattern = /(.*)\/(.*)/;
    const sortFiltersList = this.props.availSortFilters.map((sortFilter, i) => (
      <option key={i} value={sortFilter}>{sortFilter.replace(pattern, '$2')}</option>
    ));
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <select value={this.props.selectedFilter} name="selectedFilter" onChange={this.props.handleChange}>
          <option value="">--Sort Results--</option>
          {sortFiltersList}
        </select>
        <select value={this.props.sortDirection} name="sortDirection" onChange={this.props.handleChange}>
          <option value="1">Ascending</option>
          <option value="-1">Descending</option>
        </select>
        <FaPlusSquare name="sortFilters" size="23" onClick={this.props.handlePush} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availSortFilters: getAvailSortFilters(state),
  sortDirection: getSortDirection(state),
  selectedFilter: getSelectedFilter(state) 
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    target.name === 'selectedFilter' && dispatch(selectSortFilter(target.value));
    target.name === 'sortDirection' && dispatch(selectSortDirection(target.value));
  },
  loadSortFilters(array) {
    dispatch(initAvailSort(array));
  },
  handlePush() {
    dispatch(pushSortFilter());
    dispatch(removeAvailSortFilter());
    dispatch(selectSortFilter(''));
    dispatch(selectSortDirection('1'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortSelector);


// function CardSort({ sortFilters, sortDirection, selectedFilter, handleChange, handleSortPush, handleSortDelete, availSortFilters }) {
//   const filtersList = availSortFilters.map((filter, i) => {
//     const pattern = /(.*)\/(.*)/;
//     const filterName = filter.replace(pattern, '$2');
//     return (<option key={i} value={filter}>{filterName}</option>);
//   }
//   );
//   const taggedFiltersList = sortFilters.map((filter, i) => {
//     const pattern = /(.*)\/(.*)/;
//     const filterName = filter.filter.replace(pattern, '$2');
//     let direction = '';
//     switch(filter.direction) {
//       case '1': direction = <FaArrowCircleUp size="15" />;
//         break;
//       case '-1': direction = <FaArrowCircleDown size="15" />;
//         break;
//       default: direction = <FaArrowCircleUp size="15" />;
//         break;
//     }
//     return (
//       <li key={i} style={{ display: 'flex', listStyleType: 'none', alignItems: 'center', flexGrow: 0, width: '50px%', height: '20px', padding: '3px' }}>
//         {direction}
//         <h5>{filterName}</h5>
//         <FaWindowClose size="15" onClick={() => handleSortDelete(filter)} />
//       </li>
//     );
//   });
  
// return (
//   <main>
//     <ul style={{ width: '93%' }}>
//       {taggedFiltersList}
//     </ul>
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <select value={selectedFilter} name="selectedFilter" onChange={handleChange}>
//         <option value="">--Sort Results--</option>
//         {filtersList}
//       </select>
//       <select value={sortDirection} name="sortDirection" onChange={handleChange}>
//         <option value="1">Ascending</option>
//         <option value="-1">Descending</option>
//       </select>
//       <FaPlusSquare name="sortFilters" size="23" onClick={handleSortPush} />
//     </div>
//   </main>
// );
// }

// CardSort.propTypes = {
//   sortFilters: PropTypes.array.isRequired,
//   selectedFilter: PropTypes.string.isRequired,
//   sortDirection: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleSortPush: PropTypes.func.isRequired,
//   handleSortDelete: PropTypes.func.isRequired,
//   availSortFilters: PropTypes.array.isRequired
// };

// export default CardSort;
