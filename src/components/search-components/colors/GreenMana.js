import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import greenManaSymbol from '../../../assets/g-mana.svg';
import { checkGreen } from '../../../actions/searchFormActions';
import { getGreen } from '../../../selectors/searchFormSelectors'; 

class GreenMana extends PureComponent {
  static propTypes = {
    green: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'flex-start' }}>
        <img src={greenManaSymbol} style={{ width: '20px' }} />
        <input type="checkbox" name="green" value={this.props.green} onChange={() => this.props.handleChange()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  green: getGreen(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(checkGreen());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GreenMana);
