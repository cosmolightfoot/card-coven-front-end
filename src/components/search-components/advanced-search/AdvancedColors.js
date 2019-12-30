import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import ColorOptions from '../colors/ColorOptions';
import { makeStyles } from '@material-ui/core/styles';
import manaCheckboxes from '../colors/manaCheckboxes';

const useStyles = makeStyles(theme => ({
  colors: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-evenly',
    margin: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    paddingTop: '0px',
    minWidth: '450px',
    height: '225px'
  },
  formGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginRight: '50px'
  },
  formControl: {

  },
  formLabel: {
    marginBottom: theme.spacing(1),
    marginLeft: '-20px'
  }
}));

const checkBoxStyles = makeStyles({
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



function AdvancedColors() {
  const { AdvancedBlack, AdvancedBlue, AdvancedGreen, AdvancedRed, AdvancedWhite } = manaCheckboxes;
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <section className={classes.colors}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}>Filter By Mana Color</FormLabel>
          <FormGroup aria-label="Filter by Mana Color" row className={classes.formGroup}>
            <AdvancedBlue insertStyles={checkBoxStyles} />
            <AdvancedBlack insertStyles={checkBoxStyles} />
            <AdvancedRed insertStyles={checkBoxStyles} />
            <AdvancedWhite insertStyles={checkBoxStyles} />
            <AdvancedGreen insertStyles={checkBoxStyles} />
          </FormGroup>
        </FormControl>
        <ColorOptions />
      </section>
    </Paper>
  );
}

export default AdvancedColors;
