import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CardName from './CardName.js';
import CardColors from './CardColors';
// import ErrorBoundary from '../../utilities/ErrorBoundary';
import GameFormats from './GameFormats';
import CardSets from './CardSets';
import CardText from './CardText';
import CardTypes from './CardTypes';

import setData from '../../../data/setData';
import typesData from '../../../data/typesData';
import subtypesData from '../../../data/subtypesData';

export default class SearchForm extends PureComponent {
  state = {
    cardName: '',
    black: false,
    white: false,
    blue: false,
    red: false,
    green: false,
    exclusivity: '$OR$',
    commander: false,
    modern: false,
    standard: false,
    duel: false,
    penny: false,
    vintage: false,
    availSets: [],
    selectedSet: '$DEFAULT$',
    cardText: '',
    cardTypes: [],
    cardSubtypes: [],
    selectedType: '$DEFAULT$',
    selectedSubtype: '$DEFAULT$'
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleCheckboxChange = ({ target }) => {
    this.setState({ [target.name]: target.checked });
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchOptions = {
      cardName: this.state.cardName,
      black: this.state.black,
      white: this.state.white,
      green: this.state.green,
      red: this.state.red,
      blue: this.state.blue,
      exclusivity: this.state.exclusivity,
      commander: this.state.commander,
      modern: this.state.modern,
      standard: this.state.standard,
      vintage: this.state.vintage,
      penny: this.state.penny,
      duel: this.state.duel,
      selectedSet: this.state.selectedSet,
      cardText: this.state.cardText,
      selectedType: this.state.selectedType,
      selectedSubtype: this.state.selectedSubtype
    };
    this.props.onSubmit(searchOptions);
    this.setState({
      cardName: '',
      black: false,
      white: false,
      blue: false,
      red: false,
      green: false,
      exclusivity: '$OR$',
      commander: false,
      modern: false,
      standard: false,
      duel: false,
      penny: false,
      vintage: false,
      availSets: [],
      selectedSet: '$DEFAULT$',
      cardText: '',
      cardTypes: [],
      cardSubtypes: [],
      selectedType: '$DEFAULT$',
      selectedSubtype: '$DEFAULT$'
    });

  }

  componentDidMount() {
    this.setState({ availSets: setData.sets });
    this.setState({ cardTypes: typesData.types });
    this.setState({ cardSubtypes: subtypesData.subtypes });
  }

  render() {
    const {
      cardName,
      black,
      white,
      green,
      red,
      blue,
      exclusivity,
      commander, 
      modern,
      standard,
      vintage,
      penny,
      duel,
      availSets,
      selectedSet,
      cardText,
      cardTypes,
      cardSubtypes,
      selectedType,
      selectedSubtype
    } = this.state;
    const cardColors = { black, white, red, blue, green };
    const gameFormats = { commander, modern, standard, vintage, penny, duel };

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <CardName
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
          gameFormats={gameFormats}
          handleCheckboxChange={this.handleCheckboxChange}
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
        />
        <button>Search Cards</button>
      </form>
      </>
    );
  } 
}


