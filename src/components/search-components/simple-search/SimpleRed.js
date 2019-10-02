import { Mana } from '../';
import redManaSymbol from '../../../assets/r-mana.svg';
import { connect } from 'react-redux';
import { getSimpleRed } from '../../../selectors/simpleFormSelectors';
import { simpleRedMana } from '../../../actions/simpleSearchActions';

const mapStateToProps = state => ({
  color: getSimpleRed(state),
  symbol: redManaSymbol,
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(simpleRedMana());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mana);
