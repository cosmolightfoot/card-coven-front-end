import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
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
  const { color, handleChange, symbol } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={symbol} className={classes.symbol} />
      <Checkbox value={color} onChange={() => handleChange()} color="secondary"/>
    </div>
  );
}

Mana.propTypes = {
  color: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired
};

export default Mana;
