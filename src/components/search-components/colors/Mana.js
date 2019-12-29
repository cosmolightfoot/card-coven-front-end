import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';


const defaultStyles = makeStyles({
  checkbox: {},
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  symbol: {
    width: '30px'
  }
});

function Mana(props) {
  const { color, handleChange, symbol, insertStyles = defaultStyles } = props;
  const classes = insertStyles();
  return (
    <div className={classes.container}>
      <img src={symbol} className={classes.symbol} />
      <Checkbox checked={color} onChange={() => handleChange()} color="secondary"/>
    </div>
  );
}

Mana.propTypes = {
  color: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  insertStyles: PropTypes.func
};

export default Mana;
