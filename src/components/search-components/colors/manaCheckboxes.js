import { connect } from 'react-redux';
import Mana from './Mana';

// import React from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
// import { makeStyles } from '@material-ui/core/styles';

import blackManaSymbol from '../../../assets/b-mana.svg';
import blueManaSymbol from '../../../assets/u-mana.svg';
import redManaSymbol from '../../../assets/r-mana.svg';
import greenManaSymbol from '../../../assets/g-mana.svg';
import whiteManaSymbol from '../../../assets/w-mana.svg';

import { getBlack, getWhite, getRed, getGreen, getBlue } from '../../../selectors/searchFormSelectors';
import { getSimpleBlack, getSimpleWhite, getSimpleGreen, getSimpleBlue, getSimpleRed } from '../../../selectors/simpleFormSelectors';
import { checkBlack, checkWhite, checkRed, checkGreen, checkBlue } from '../../../actions/searchFormActions';
import { simpleBlackMana, simpleBlueMana, simpleGreenMana, simpleRedMana, simpleWhiteMana } from '../../../actions/simpleSearchActions';


const manaColorConstructor = [
  {
    id: 'SimpleBlack',
    symbol: blackManaSymbol,
    selector: getSimpleBlack,
    action: simpleBlackMana
  },
  {
    id: 'AdvancedBlack',
    symbol: blackManaSymbol,
    selector: getBlack,
    action: checkBlack
  },
  {
    id: 'SimpleBlue',
    symbol: blueManaSymbol,
    selector: getSimpleBlack,
    action: simpleBlueMana
  },
  {
    id: 'AdvancedBlue',
    symbol: blueManaSymbol,
    selector: getBlue,
    action: checkBlue
  },
  {
    id: 'SimpleRed',
    symbol: redManaSymbol,
    selector: getSimpleRed,
    action: simpleRedMana
  },
  {
    id: 'AdvancedRed',
    symbol: redManaSymbol,
    selector: getRed,
    action: checkRed
  },
  {
    id: 'SimpleGreen',
    symbol: greenManaSymbol,
    selector: getSimpleGreen,
    action: greenManaSymbol
  },
  {
    id: 'AdvancedGreen',
    symbol: greenManaSymbol,
    selector: getGreen,
    action: checkGreen
  },
  {
    id: 'SimpleWhite',
    symbol: whiteManaSymbol,
    selector: getSimpleWhite,
    action: whiteManaSymbol
  },
  {
    id: 'AdvancedWhite',
    symbol: whiteManaSymbol,
    selector: getWhite,
    action: checkWhite
  }
];

const statefulManaCheckboxes = {};

manaColorConstructor.forEach(({ id, symbol, selector, action }) => {
  const mapStateToProps = state => ({
    color: selector(state),
    symbol
  });

  const mapDispatchToProps = dispatch => ({
    handleChange() {
      dispatch(action());
    }
  });

  statefulManaCheckboxes[id] = connect(mapStateToProps, mapDispatchToProps)(Mana);

});

export default statefulManaCheckboxes;
