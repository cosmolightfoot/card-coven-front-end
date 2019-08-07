import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import ErrorBoundary from '../../utilities/ErrorBoundary';


import { connect } from 'react-redux';
import { newSearch } from '../../actions/cardSearchActions';
import CardName from '../../components/search-components/name/CardName';
import CardColors from '../../components/search-components/colors/CardColors';
import CardTypes from '../../components/search-components/types/CardTypes';
import CardText from '../../components/search-components/text/CardText';
import CardFormats from '../../components/search-components/formats/CardFormats';
import CardSort from '../../components/search-components/sort/CardSort';
import CardSet from '../../components/search-components/sets/CardSets';
import { getCardName, getBlack, getWhite, getRed, getBlue, getGreen, getExact, getExclude, getFormats, getSets, getCardText, getTypeLine, getSortFilters } from '../../selectors/searchFormSelectors';
import { SearchFormStyle, SubmitSearch } from '../../styled-components/search-form-styles';


class SearchForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    cardName: PropTypes.string.isRequired,
    black: PropTypes.bool.isRequired,
    white: PropTypes.bool.isRequired,
    red: PropTypes.bool.isRequired,
    blue: PropTypes.bool.isRequired,
    green: PropTypes.bool.isRequired,
    exact: PropTypes.bool.isRequired,
    exclude: PropTypes.bool.isRequired,
    formats: PropTypes.array.isRequired,
    sets: PropTypes.array.isRequired,
    cardText: PropTypes.string.isRequired,
    typeLine: PropTypes.string.isRequired,
    sortFilters: PropTypes.array.isRequired
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchOptions = {
      cardName: this.props.cardName,
      colors: {
        black: this.props.black,
        white: this.props.white,
        green: this.props.green,
        red: this.props.red,
        blue: this.props.blue
      },
      exact: this.props.exact,
      exclude: this.props.exclude,
      colorIdentity: false,
      formats: this.props.formats,
      sets: this.props.sets,
      cardText: this.props.cardText,
      typeLine: this.props.typeLine,
      sortFilters: this.props.sortFilters,
      layout: '',
      reprintedAllowed: false
    };
    console.log(searchOptions);
    this.props.onSubmit(searchOptions);
  }

  render() {
    return (
      <SearchFormStyle onSubmit={this.handleSubmit}>
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <section style={{ display: 'flex' }}>
            <section style={{ display: 'flex', flexDirection: 'column' }}>
              <CardName />
              <CardColors />
            </section>
            <section>
              <CardTypes />
              <CardText />
              <CardFormats />
            </section>
            <section>
              <CardSet />
            </section>
          </section>
          <CardSort />
        </section>
        <SubmitSearch>
          Search Cards!
        </SubmitSearch>
      </SearchFormStyle>
    );
  } 
}

const mapStateToProps = state => ({
  cardName: getCardName(state),
  black: getBlack(state),
  white: getWhite(state),
  red: getRed(state),
  blue: getBlue(state),
  green: getGreen(state),
  exact: getExact(state),
  exclude: getExclude(state),
  formats: getFormats(state),
  sets: getSets(state),
  cardText: getCardText(state),
  typeLine: getTypeLine(state),
  sortFilters: getSortFilters(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(searchOptions) {
    dispatch(newSearch(searchOptions));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);


