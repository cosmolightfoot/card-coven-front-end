import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import CardName from './CardName.js';
import CardColors from './CardColors';
import ErrorBoundary from '../../utilities/ErrorBoundary';
import GameFormats from './GameFormats';


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
    vintage: false
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleCheckboxChange = ({ target }) => {
    this.setState({ [target.name]: target.checked });
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
      duel
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
        <ErrorBoundary>
          <GameFormats 
            gameFormats={gameFormats}
            handleCheckboxChange={this.handleCheckboxChange}
          />
        </ErrorBoundary>
        <button>Search Cards</button>
      </form>
    );
  } 
}


