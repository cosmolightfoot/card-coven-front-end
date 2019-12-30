import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getExact } from '../../../selectors/searchFormSelectors';
import { checkExact } from '../../../actions/searchFormActions';

function Exact({ exact, handleChange }) {
  return (
    <FormControlLabel
      value="Match Colors Exactly"
      control={<Checkbox color="secondary" checked={exact} onChange={() => handleChange()} />}
      label="Match Colors Exactly"
      labelPlacement="end"
    />
  );
}

Exact.propTypes = {
  exact: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

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
)(Exact);
