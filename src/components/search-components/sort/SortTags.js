import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaWindowClose, FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
import { getSortFilters } from '../../../selectors/searchFormSelectors';
import { removeSortFilter, pushAvailSortFilter } from '../../../actions/searchFormActions';
import { SortFilterTag, TagList } from '../../../styled-components/search-form';

class SortTags extends PureComponent {
  static propTypes = {
    sortFilters: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
  }
  render() {
    const taggedFiltersList = this.props.sortFilters.map((filter, i) => {
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
        <SortFilterTag key={i} style={{ display: 'flex', listStyleType: 'none', alignItems: 'center', flexGrow: 0, width: '50px%', height: '20px', padding: '3px' }}>
          {direction}
          <h5>{filterName}</h5>
          <FaWindowClose size="15" onClick={() => this.props.handleDelete(filter)} />
        </SortFilterTag>
      );
    });

    return (
      <TagList style={{ width: '93%' }}>
        {taggedFiltersList}
      </TagList>
    );
  }
}
    
const mapStateToProps = state => ({
  sortFilters: getSortFilters(state)
});

const mapDispatchToProps = dispatch => ({
  handleDelete(sortFilter) {
    dispatch(pushAvailSortFilter(sortFilter));
    dispatch(removeSortFilter(sortFilter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortTags);

