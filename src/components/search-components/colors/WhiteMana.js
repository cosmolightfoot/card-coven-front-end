import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import whiteManaSymbol from '../../../assets/w-mana.svg';
import { checkWhite } from '../../../actions/searchFormActions';
import { getWhite } from '../../../selectors/searchFormSelectors'; 

class WhiteMana extends PureComponent {
  static propTypes = {
    white: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'flex-start' }}>
        <img src={whiteManaSymbol} style={{ width: '20px' }} />
        <input type="checkbox" name="black" value={this.props.white} onChange={() => this.props.handleChange()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  white: getWhite(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(checkWhite());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiteMana);
