import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import CardName from './CardName.js';
import CardColors from './CardColors';


export default class SearchForm extends PureComponent {
  state = {
    cardName: '',
    black: false,
    white: false,
    blue: false,
    red: false,
    green: false,
    exclusivity: 'or'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleCheckboxChange = ({ target }) => {
    this.setState({ [target.name]: target.checked });
  }

  render() {
    const cardName = this.cardName;
    const { black, white, green, red, blue, exclusivity } = this.state;
    const cardColors = { black, white, red, blue, green, exclusivity };

    return (
      <form>
        <CardName
          cardName={cardName}
          handleChange={this.handleChange}
        />
        <CardColors
          cardColors={cardColors}
          handleChange={this.handleChange}
          handleCheckboxChange={this.handleCheckboxChange}  
        />
        <button>Search Cards</button>
      </form>
    );
  } 
}


