import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CardName from '../../components/search-components/CardName';
import CardColors from '../../components/search-components/CardColors';
import CardFormats from '../../components/search-components/CardFormats';
import CardLayout from '../../components/search-components/CardLayout';
// import ErrorBoundary from '../../utilities/ErrorBoundary';
import CardSets from '../../components/search-components/CardSets';
import CardSort from '../../components/search-components/CardSort';
import CardText from '../../components/search-components/CardText';
import CardTypes from '../../components/search-components/CardTypes';
import layoutData from '../../data/layoutData';
import setData from '../../data/setData';
import sortData from '../../data/sortData';
import formatsData from '../../data/formatData';

import { connect } from 'react-redux';
// import { newSearch } from '../../actions/cardSearchActions';

export default class SearchForm extends PureComponent {
  state = {
    cardName: '',
    black: false,
    white: false,
    blue: false,
    red: false,
    green: false,
    exact: false,
    exclude: false,
    colorIdentity: false,
    reprintedAllowed: false,
    availLayouts: [],
    layout: '',
    formats: [],
    availGameFormats: [],
    selectedFormat: '',
    sets: [],
    availSets: [],
    selectedSet: '',
    cardText: '',
    typeLine: '',
    sortFilters: [],
    selectedFilter: '',
    sortDirection: '1',
    availSortFilters: []
  }

  static propTypes = {
    
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleFormatPush = () => {
    if(!this.state.selectedFormat) return;
    this.setState(state => ({
      formats: [...state.formats, state.selectedFormat],
      availGameFormats: [...state.availGameFormats.filter(format => format !== state.selectedFormat)],
      selectedFormat: ''
    }));
  }

  handleSetPush = () => {
    if(!this.state.selectedSet) return;
    this.setState(state => ({
      sets: [...state.sets, state.selectedSet],
      availSets: [...state.availSets.filter(set => set !== state.selectedSet)],
      selectedSet: ''
    }));
  }

  handleSortPush = () => {
    if(!this.state.selectedFilter) return;
    this.setState(state => ({
      sortFilters: [...state.sortFilters, { filter: state.selectedFilter, direction: state.sortDirection }],
      availSortFilters: [...state.availSortFilters.filter(filter => filter !== state.selectedFilter)],
      selectedFilter: ''
    }));
  }

  handleFormatDelete = (format) => {
    this.setState(state => ({
      formats: [...state.formats.filter(entry => entry !== format)],
      availGameFormats: [...state.availGameFormats, format]
    })
    );
  };

  handleSetDelete = (set) => {
    this.setState(state => ({
      sets: [...state.sets.filter(entry => entry !== set)],
      availSets: [...state.availSets, set]
    }));
  }

  handleSortDelete = (sortFilter) => {
    this.setState(state => {
      console.log('STATE', state.sortFilters, 'FILTER', sortFilter);
      console.log('FILTERED', state.sortFilters.filter(entry => {
        console.log('ENTRY', entry.filter === sortFilter);
        return sortFilter !== entry.filter;
      }));
      return {
        sortFilters: [...state.sortFilters.filter(entry => sortFilter !== entry)],
        availSortFilters: [...state.availSortFilters, sortFilter.filter]
      };
    });
  };

  handleCheckboxChange = ({ target }) => {
    this.setState({ [target.name]: target.checked });
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchOptions = {
      cardName: this.state.cardName,
      colors: {
        black: this.state.black,
        white: this.state.white,
        green: this.state.green,
        red: this.state.red,
        blue: this.state.blue,
        exact: this.state.exact,
        exclude: this.state.exclude,
        colorIdentity: this.state.colorIdentity
      },
      formats: this.state.formats,
      sets: this.state.sets,
      cardText: this.state.cardText,
      typeLine: this.state.typeLine,
      layout: this.state.layout,
      reprintedAllowed: this.state.reprintedAllowed
    };
    this.props.onSubmit(searchOptions);
    this.setState({
      cardName: '',
      black: false,
      white: false,
      blue: false,
      red: false,
      green: false,
      exact: false,
      exclude: false,
      colorIdentity: 'color',
      reprintedAllowed: false,
      layout: '',
      formats: [],
      availFormats: formatsData,
      selectedFormat: [],
      sets: [],
      selectedSet: '',
      availSets: setData,
      cardText: '',
      typeLine: '',
      sortFilters: [],
      selectedFilter: '',
      sortDirection: 'ascending',
      availSortFilters: sortData
    });

  }

  componentDidMount() {
    this.setState({ 
      availSets: setData,
      availGameFormats: formatsData,
      availLayouts: layoutData,
      availSortFilters: sortData
    });
  }

  render() {
    const {
      cardName,
      black,
      white,
      green,
      red,
      blue,
      exclude,
      exact,
      colorIdentity,
      formats,
      availGameFormats,
      selectedFormat,
      sets, 
      availSets,
      selectedSet,
      cardText,
      availLayouts,
      layout,
      typeLine,
      sortFilters,
      selectedFilter,
      sortDirection,
      availSortFilters
    } = this.state;
    const cardColors = { black, white, red, blue, green };

    return (
      <main style={{ alignSelf: 'flex-end', width: '40vw' }}>
        <form onSubmit={this.handleSubmit}>
          <CardName
            cardName={cardName}
            handleChange={this.handleChange}
          />
          <CardColors
            cardColors={cardColors}
            exact={exact}
            exclude={exclude}
            colorIdentity={colorIdentity}
            handleChange={this.handleChange}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <CardTypes 
            typeLine={typeLine}
            handleChange={this.handleChange}
          />
          <CardText 
            cardText={cardText}
            handleChange={this.handleChange}
          />
          <CardFormats 
            formats={formats}
            availGameFormats={availGameFormats}
            selectedFormat={selectedFormat}
            handleChange={this.handleChange}
            handleFormatPush={this.handleFormatPush}
            handleFormatDelete={this.handleFormatDelete}
          />
          <CardSets
            sets={sets}
            selectedSet={selectedSet}
            availSets={availSets}
            handleChange={this.handleChange}
            handleSetPush={this.handleSetPush}
            handleSetDelete={this.handleSetDelete}
          />
          <CardLayout
            availLayouts={availLayouts}
            layout={layout}
            handleChange={this.handleChange}
          />
          <CardSort
            sortFilters={sortFilters}
            sortDirection={sortDirection}
            selectedFilter={selectedFilter}
            availSortFilters={availSortFilters}
            handleChange={this.handleChange}
            handleSortPush={this.handleSortPush}
            handleSortDelete={this.handleSortDelete}
          />
          <button>Search Cards</button>
        </form>
      </main>
    );
  } 
}

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit(searchOptions) {
//     dispatch(newSearch(searchOptions));
//   }
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(SearchForm);


