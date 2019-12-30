import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  }
});

import Exact from './Exact';
import Exclude from './Exclude';

function ColorOptions() {
  const classes = useStyles();

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="Mana Color Options" row className={classes.formGroup}>
        <Exact />
        <Exclude />
      </FormGroup>
    </FormControl>
  );
}

export default ColorOptions;
