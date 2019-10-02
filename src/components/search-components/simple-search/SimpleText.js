import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { changeTextField } from '../../../actions/simpleSearchActions';
import { getSimpleText } from '../../../selectors/simpleFormSelectors';

const useStyles = makeStyles({
  input: {
    width: '50%',
    margin: '40px'
  }
});

function SimpleText(props) {
  const { text, handleChange } = props;
  const classes = useStyles();
  return (
    <Input
      onChange={() => handleChange()}
      value={text}
      className={classes.input}
      placeholder="Search for Cards by Name, Type, or Text"
      inputProps={{ style: { textAlign: 'center' } }}
    />
  );
}

SimpleText.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  text: getSimpleText(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange(text) {
    dispatch(changeTextField(text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleText);
