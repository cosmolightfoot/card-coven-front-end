import React, { PureComponent } from 'react';
import SearchForm from '../components/search-components/SearchForm';
import Cards from '../components/search-components/Cards';
import cardListData from '../../data/cardListData';

export default class CardSearch extends PureComponent {
  state = {
    cardName: '',
    black: false,
    white: false,
    green: false,
    blue: false,
    red: false,
    exclusivity: 'or'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleInputChange = ({ target }) => {
    
  }

  render() {
    const { cardName, black, white, red, blue, green, exclusivity } = this.state;
    const searchState = { cardName, black, white, red, blue, green, exclusivity };
    return (
      <>
        <SearchForm searchState={searchState} handleChange={this.handleChange} handleInputChange={handleInputChange} />
        <Cards cardListData={cardListData.cards} />
      </>
    );
  }
}
