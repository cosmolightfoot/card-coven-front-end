import { Mana } from '../';
import greenManaSymbol from '../../../assets/g-mana.svg';
import { connect } from 'react-redux';
import { getSimpleGreen } from '../../../selectors/simpleFormSelectors';
import { simpleGreenMana } from '../../../actions/simpleSearchActions';

const mapStateToProps = state => ({
  color: getSimpleGreen(state),
  symbol: greenManaSymbol,
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(simpleGreenMana());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mana);
