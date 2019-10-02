import { Mana } from '../';
import blueManaSymbol from '../../../assets/u-mana.svg';
import { connect } from 'react-redux';
import { getSimpleBlue } from '../../../selectors/simpleFormSelectors';
import { simpleBlueMana } from '../../../actions/simpleSearchActions';

const mapStateToProps = state => ({
  color: getSimpleBlue(state),
  symbol: blueManaSymbol,
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(simpleBlueMana());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mana);
