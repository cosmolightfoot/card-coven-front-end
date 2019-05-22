import React, { PureComponent } from 'react';
import SearchForm from '../components/search-components/SearchForm';
import Cards from '../components/search-components/Cards';
import cardListData from '../../data/cardListData';

export default class CardSearch extends PureComponent {
  state ={
    cardName: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { cardName } = this.state;
    const searchState = { cardName };
    return (
      <>
        <SearchForm searchState={searchState} handleChange={this.handleChange} />
        <Cards cardListData={cardListData.cards} />
      </>
    );
  }
}
