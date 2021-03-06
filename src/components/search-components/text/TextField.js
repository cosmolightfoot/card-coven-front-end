import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const defaultStyles = makeStyles({
  input: {
    width: '100%',
    margin: '10px'
  }
});

function TextField(props) {
  const { text, handleChange, placeholder, insertStyles = defaultStyles } = props;
  const classes = insertStyles();
  return (
    <Input
      onChange={event => handleChange(event.target.value)}
      value={text}
      className={classes.input}
      placeholder={placeholder}
      inputProps={{ style: { textAlign: 'center' } }}
    />
  );
}

TextField.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  insertStyles: PropTypes.func
};

export default TextField;
