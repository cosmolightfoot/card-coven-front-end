import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import CardName from './CardName.js';
import CardColors from './CardColors';
import ErrorBoundary from '../../utilities/ErrorBoundary';
import GameFormats from './GameFormats';
import CardSets from './CardSets';
import setData from '../../../data/setData';
import CardText from './CardText';

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
    selectedSet: '',
    cardText: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleCheckboxChange = ({ target }) => {
    this.setState({ [target.name]: target.checked });
  }

  componentDidMount() {
    this.setState({ availSets: setData.sets });
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
      cardText
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
        <ErrorBoundary>
          <CardText cardText={cardText} handleChange={this.handleChange} />
        </ErrorBoundary>
        <button>Search Cards</button>
      </form>
    );
  } 
}


