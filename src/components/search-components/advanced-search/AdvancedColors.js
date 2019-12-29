import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import manaCheckboxes from '../colors/manaCheckboxes';

const useStyles = makeStyles({
  colors: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-evenly',
    margin: '50px'
  }  
});

function AdvancedColors() {
  const classes = useStyles();
  const { AdvancedBlack, AdvancedBlue, AdvancedGreen, AdvancedRed, AdvancedWhite } = manaCheckboxes;

  return (
    <section className={classes.colors}>
      <AdvancedBlue />
      <AdvancedBlack />
      <AdvancedRed />
      <AdvancedWhite />
      <AdvancedGreen />
    </section>
  );
}

AdvancedColors.propTypes = {
};

export default AdvancedColors;
