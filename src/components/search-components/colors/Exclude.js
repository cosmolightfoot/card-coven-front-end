import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getExclude } from '../../../selectors/searchFormSelectors';
import { checkExclude } from '../../../actions/searchFormActions';

function Exclude({ exclude, handleChange }) {
  return (
    <FormControlLabel
      value="Exclude Unselected Colors"
      control={<Checkbox color="secondary" checked={exclude} onChange={() => handleChange()} />}
      label="Exclude Unselected Colors"
      labelPlacement="end"
    />
  );
}

Exclude.propTypes = {
  exclude: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  exclude: getExclude(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(checkExclude());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exclude);
