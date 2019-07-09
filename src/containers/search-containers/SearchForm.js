import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CardName from '../../components/search-components/CardName';
import CardColors from '../../components/search-components/CardColors';
import CardFormats from '../../components/search-components/CardFormats';
// import ErrorBoundary from '../../utilities/ErrorBoundary';
import CardSets from '../../components/search-components/CardSets';
// import CardText from '../../components/search-components/CardText';
import CardTypes from '../../components/search-components/CardTypes';

import setData from '../../data/setData';
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
    layout: 'normal',
    formats: [],
    availGameFormats: [],
    selectedFormat: '',
    sets: [],
    availSets: [],
    selectedSet: '',
    cardText: '',
    typeLine: ''
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
      layout: 'normal',
      formats: [],
      availFormats: formatsData,
      selectedFormat: [],
      sets: [],
      selectedSet: '',
      availSets: [],
      cardText: '',
      typeLine: ''
    });

  }

  componentDidMount() {
    this.setState({ availSets: setData });
    this.setState({ availGameFormats: formatsData });
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
      typeLine
    } = this.state;
    const cardColors = { black, white, red, blue, green };

    return (
      <main style={{ alignSelf: 'center', width: '40vw' }}>
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
        
          {/* <CardName
          cardName={cardName}
          handleChange={this.handleChange}
        />
        <CardColors
          cardColors={cardColors}
          handleChange={this.handleChange}
          exclusivity={exclusivity}  
          handleCheckboxChange={this.handleCheckboxChange}
        />
        <GameFormats 
          selectedFormat={selectedFormat}
          availGameFormats={availGameFormats}
          handleChange={this.handleChange}
        />
        <CardSets
          availSets={availSets}
          selectedSet={selectedSet}
          handleChange={this.handleChange}
        />
        <CardText 
          cardText={cardText}
          handleChange={this.handleChange}
        />
        <CardTypes
          cardTypes={cardTypes}
          cardSubtypes={cardSubtypes}
          handleChange={this.handleChange}
          selectedType={selectedType}
          selectedSubtype={selectedSubtype}
        /> */}
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


