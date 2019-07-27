import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import blackManaSymbol from '../../../assets/b-mana.svg';
import { checkBlack } from '../../../actions/searchFormActions';
import { getBlack } from '../../../selectors/searchFormSelectors'; 

class BlackMana extends PureComponent {
  static propTypes = {
    black: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'flex-start' }}>
        <img src={blackManaSymbol} style={{ width: '20px' }} />
        <input type="checkbox" name="black" value={this.props.black} onChange={() => this.props.handleChange()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  black: getBlack(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(checkBlack());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlackMana);
