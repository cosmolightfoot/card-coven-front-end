import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkExact } from '../../../actions/searchFormActions';
import { getExact } from '../../../selectors/searchFormSelectors'; 

class MatchExact extends PureComponent {
  static propTypes = {
    exact: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" name="exact" value={this.props.exact} onChange={() => this.props.handleChange()} />
        <h4>Match Colors Exactly</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exact: getExact(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(checkExact());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchExact);
