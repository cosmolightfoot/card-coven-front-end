import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import textFields from '../text/textFields';
import AdvancedColors from './AdvancedColors';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    minHeight: '380px'
  },
  button: {
    margin: theme.spacing(3)
  }
}));

const textStyles = makeStyles(theme => ({
  input: {
    width: '100%',
    marginBottom: theme.spacing(3)
  }
}));

function MiddleColumn() {
  const classes = useStyles();
  const { CardName } = textFields;
  return (
    <section className={classes.column}>
      <CardName insertStyles={textStyles} />
      <AdvancedColors />
      <Button type="submit" color="primary" size="large" variant="outlined" className={classes.button}>
        Search
      </Button>
    </section>
  );
}

export default MiddleColumn;
