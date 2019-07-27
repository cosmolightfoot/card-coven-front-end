import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import blueManaSymbol from '../../../assets/u-mana.svg';
import { checkBlue } from '../../../actions/searchFormActions';
import { getBlue } from '../../../selectors/searchFormSelectors'; 

class BlueMana extends PureComponent {
  static propTypes = {
    blue: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'flex-start' }}>
        <img src={blueManaSymbol} style={{ width: '20px' }} />
        <input type="checkbox" name="blue" value={this.props.blue} onChange={() => this.props.handleChange()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blue: getBlue(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(checkBlue());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlueMana);
