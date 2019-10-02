import { Mana } from '../';
import blackManaSymbol from '../../../assets/b-mana.svg';
import { connect } from 'react-redux';
import { getSimpleBlack } from '../../../selectors/simpleFormSelectors';
import { simpleBlackMana } from '../../../actions/simpleSearchActions';

const mapStateToProps = state => ({
  color: getSimpleBlack(state),
  symbol: blackManaSymbol,
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(simpleBlackMana());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mana);
