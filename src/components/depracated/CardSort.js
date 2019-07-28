import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import SortField from './SortField';

class CardSort extends PureComponent {
  static propTypes = {
    sortFilters: PropTypes.array.isRequired,
    selectedFilter: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSortPush: PropTypes.func.isRequired,
    handleSortDelete: PropTypes.func.isRequired,
    availSortFilters: PropTypes.array.isRequired
  }

  state = {
    isHidden: false
  }
  
  toggleHidden = () => {
    this.setState(state => {
      if(state.isHidden) return { isHidden: false };
      else return { isHidden: true };
    });
  }

  render() {
    const {
      sortFilters, 
      selectedFilter, 
      sortDirection, 
      handleChange, 
      handleSortPush, 
      handleSortDelete, 
      availSortFilters 
    } = this.props;
    return (
      <section style={{ backgroundColor: 'rgb(144, 255, 144)', padding: '5px' }}>
        <FormHeader title="Sort Results" isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />
        { this.state.isHidden ? null : 
          <SortField 
            sortFilters={sortFilters} 
            selectedFilter={selectedFilter}
            sortDirection={sortDirection}
            handleChange={handleChange} 
            handleSortPush={handleSortPush} 
            handleSortDelete={handleSortDelete} 
            availSortFilters={availSortFilters} 
          />
        }
      </section>
    );
  }
}

export default CardSort;
