import { Mana } from '../';
import whiteManaSymbol from '../../../assets/w-mana.svg';
import { connect } from 'react-redux';
import { getSimpleWhite } from '../../../selectors/simpleFormSelectors';
import { simpleWhiteMana } from '../../../actions/simpleSearchActions';

const mapStateToProps = state => ({
  color: getSimpleWhite(state),
  symbol: whiteManaSymbol,
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(simpleWhiteMana());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mana);
