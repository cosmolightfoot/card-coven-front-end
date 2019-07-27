import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import redManaSymbol from '../../../assets/r-mana.svg';
import { checkWhite, checkRed } from '../../../actions/searchFormActions';
import { getWhite, getRed } from '../../../selectors/searchFormSelectors'; 

class RedMana extends PureComponent {
  static propTypes = {
    white: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'flex-start' }}>
        <img src={redManaSymbol} style={{ width: '20px' }} />
        <input type="checkbox" name="red" value={this.props.red} onChange={() => this.props.handleChange()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  red: getRed(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(checkRed());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedMana);
