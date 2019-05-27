import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import CardName from './CardName.js';
import CardColors from './CardColors';
import ErrorBoundary from '../../utilities/ErrorBoundary';
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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleCheckboxChange = ({ target }) => {
    this.setState({ [target.name]: target.checked });
  }

  componentDidMount() {
    this.setState({ availSets: setData.sets });
    this.setState({ cardTypes: typesData.types });
    this.setState({ cardSubtypes: subtypesData.subtypes });
  }

  render() {
    const { cardName } = this.state;
    const {
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
      <form>
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
        <ErrorBoundary>
          <CardTypes
            cardTypes={cardTypes}
            cardSubtypes={cardSubtypes}
            handleChange={this.handleChange}
          />
        </ErrorBoundary>
        <button>Search Cards</button>
      </form>
    );
  } 
}


